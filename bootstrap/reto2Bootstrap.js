const cartShopping = [];
// Variable para tener el valor de las estiquetas donde vamos a colocar nuestras tarjetas.
const container = document.getElementById("clothes"); 

// Clase para crear los productos nos valdra para insertar las tarjetas e identificar los valores de dentro de las tarjetas.
class Product {
    constructor(id, title, img, price) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.price = price;
    }
}
// Mini base de datos de objetos de la clase Product
const dataBase = [
    new Product(1,"Parka3/4 gris","chaqueta.jpeg",450),
    new Product(2,"Plumas negro","chaqueta2.jpeg",300),
    new Product(3,"Impermeable negro","chaqueta3.jpeg",280),
    new Product(4,"Corta-Vientos gris","chaqueta4.jpeg",200),
    new Product(5,"Corta-vientos Azul","chaqueta5.jpeg",180),
    new Product(6,"Plumas rojo","chaqueta6.jpeg",210),
    new Product(7,"Impermeable negro ","chaqueta7.jpeg",230),
    new Product(8,"Corta-vientos gris","chaqueta8.jpeg",160),
]
// Funcion para insertar las tarjetas al HTML añadiendo los valores del constructor de la clase.
function insertCards() {
    let htmlCard = ``;
    dataBase.forEach(product => {
        const card = `
        <div class="card"style="width: 18rem;margin: 10px;">
            <img src="${product.img}"style="height:265px;object-fit:scale-down;" class="card-img-top" alt="${product.img}">
            <div class="card-body">
                <h5 class="card-title"id="title4">${product.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's<br></p>
                <p class="card-text"id="price4">${product.price}€</p>
                <buttom class="btn btn-primary"style="background-color: black;"onclick="insertProduct(${product.id})">Añadir a Carrito</a>
            </div>
        </div>`
        htmlCard += card;
    })
        container.innerHTML = htmlCard;
}
// Funcion para meter cada producto en el carrito.
function insertProduct(id) {
    cartShopping.push(dataBase.find(item => item.id == id));
}
// Funcion para calcular todos los precios que se implanten en el carrito,
function calculatePrice() {
    let allPrice = 0;

    cartShopping.forEach(product => {
        allPrice += product.price;
    })
    return allPrice;
}
// Funcion para crear la lista en el Modal y implantar los productor con su titulo y precio.
function insertModal() {
    let listModal = document.getElementById("carrito");
    listModal.innerText = ``;

    cartShopping.forEach(product => {
        let listItem = document.createElement("li");
        listItem.innerText = `${product.title}:${product.price}€`;
        listModal.appendChild(listItem);
    })
    const totalPrice = document.querySelector("#total");
    totalPrice.innerText = `${calculatePrice()}€`;
}

     



