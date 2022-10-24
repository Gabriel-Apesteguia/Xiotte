// E-commerce - Casa de comida Mexicana

//Variables "constantes" globales 

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")

const productos = [
    {id: 1, nombre: "Burrito de carne", precio: 790, cantidad: 1, img:"https://burritosweb.com/wp-content/uploads/2017/10/03.-Burritos-mexicanos-de-carne-molida-1.jpg"},
    {id: 2, nombre: "Burrito de pollo", precio: 790, cantidad: 1, img:"https://placeralplato.com/files/2013/12/burrito-terminado-detalle-640x480.jpg?width=1200&enable=upscale"},
    {id: 3, nombre: "Burrito veggie", precio: 740, cantidad: 1, img:"https://reciperunner.com/wp-content/uploads/2013/12/black-bean-veggie-burritos-5-720x720.jpg"},
    {id: 4, nombre: "Burrito choriqueso", precio: 780, cantidad: 1, img:"https://www.aberdeenskitchen.com/wp-content/uploads/2017/10/Chorizo-Breakfast-Burritos-2-680x1024.jpg"},
    {id: 5, nombre: "Burrito belly", precio: 790, cantidad: 1, img:"https://lareceta.com.ar/uploads/notas/php4qjqJ5.jpg"},
    {id: 6, nombre: "Burrito carnitas", precio: 850, cantidad: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0DE88FXHvi0WIRnoE6Mt-Dl5aiq-cIBswFL3oeG9dXJZ6GjWuSK8Z2TIiWiZ5-6Z3WY&usqp=CAU"},
    {id: 7, nombre: "Quesadilla de carne", precio: 780, cantidad: 1, img:"https://cocinarrecetasdepostres.net/wp-content/uploads/2019/05/88290/quesadillas-crujientes-de-carne-molida.jpg"},
    {id: 8, nombre: "Quesadilla de pollo", precio: 780, cantidad: 1, img:"https://www.recetasderechupete.com/wp-content/uploads/2021/05/Quesadillas-de-pollo.jpg"},
    {id: 9, nombre: "Quesadilla veggie", precio: 730, cantidad: 1, img:"https://www.inspiredtaste.net/wp-content/uploads/2021/03/Vegetable-Quesadilla-Recipe-1-1200.jpg"},
    {id: 10, nombre: "Quesadilla choriqueso", precio: 750, cantidad: 1, img:"https://www.gastrolabweb.com/u/fotografias/m/2022/1/23/f1280x720-24652_156327_5050.jpg"},
    {id: 11, nombre: "Quesadilla de queso", precio: 700, cantidad: 1, img:"https://assets.unileversolutions.com/recipes-v2/210445.jpg"},
    {id: 12, nombre: "Gringas de carne", precio: 780, cantidad: 1, img:"https://los40.com.mx/los40/imagenes/2017/09/14/lacorneta/1505417245_948069_1505417328_gigante_normal.jpg"},
    {id: 13, nombre: "Gringas de pollo", precio: 790, cantidad: 1, img:"https://i.ytimg.com/vi/RqTDRV5nHF4/maxresdefault.jpg"},
    {id: 14, nombre: "Gringas veggie", precio: 750, cantidad: 1, img:"https://www.gastrolabweb.com/u/fotografias/m/2021/5/15/f1280x720-13288_144963_5050.jpeg"},
    {id: 15, nombre: "Gringas choriqueso", precio: 770, cantidad: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-yTRBI06v628U9bPRmU8VwYhBowgQ2CvPE-L2CyPTLr4jUgTL-JBFh_ojELvDEgyQoU&usqp=CAU"},
    {id: 16, nombre: "Gringas de Queso", precio: 690, cantidad: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GTXu1fZdMyWeHgu_63QhKTQEzsd1tly5sw&usqp=CAU"},
    {id: 17, nombre: "Gringas carnitas", precio: 890, cantidad: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG7zLmDSzHUk9S2Cubx7SCfL-gMO5kjS9ww&usqp=CAU"},
]

let carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

/* APP */

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}"
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if (repeat) {
        carrito.map((prod) => {
            if (prod.id === product.id) {
                prod.cantidad++;
            }
        });
    } else {
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
            cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    }
    });
});

const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};


