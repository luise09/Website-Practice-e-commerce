
// asi se seleccionan elementos del html al codigo
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".menu-icon");

const shoppingCartDropDown = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

// ejectuar algo cuando click
navEmail.addEventListener("click", toggleDesktopMenu);

mobileMenuIcon.addEventListener("click", toggleMenuIcon);

shoppingCartDropDown.addEventListener("click", toggleCartAside);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


// creamos la funcion
function toggleDesktopMenu() {
    // constante para saber si el shopping cart esta cerrado
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    // constante para saber si el Product Detail esta cerrado 
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}
function toggleMenuIcon() {
    // constante para saber si el shoppingCartContainer esta cerrado
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    // constante para saber si el Product Detail esta cerrado 
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    // esto hara que se cierre el menu mobile al correr la funcion
    mobileMenu.classList.toggle("inactive");
}
function toggleCartAside() {
    // constante para saber si el menu Desktop esta cerrado
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    
    // constante para saber si el Mobile Menu esta cerrado 
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    // constante para saber si el Product Detail esta cerrado 
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    // si no esta cerrado, se añade inactive el cual lo cierra
    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    // esto hara que se cierre el carrito al correr la funcion 
    shoppingCartContainer.classList.toggle("inactive");
    
}
function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "AOC Q27G2U/BK",
    price: 258,
    image: "https://m.media-amazon.com/images/I/71yuvCGwXpL._AC_SX679_.jpg"
});
productList.push({
    name: "Logitech MX Master 3S",
    price: 94,
    image: "https://m.media-amazon.com/images/I/61xKiCADfpL._AC_SX679_.jpg"
});
productList.push({
    name: "Sony WH-1000XM5",
    price: 374,
    image: "https://m.media-amazon.com/images/I/61fxPWFu6aL._AC_SX425_.jpg"
});
productList.push({
    name: "Apple 2023 MacBook Pro",
    price: 3279,
    image: "https://m.media-amazon.com/images/I/61fd2oCrvyL.__AC_SY445_SX342_QL70_ML2_.jpg"
});
productList.push({
    name: "Logitech G513",
    price: 142,
    image: "https://m.media-amazon.com/images/I/618oJuA-M2S._AC_SX679_.jpg"
});


// THIS IS A FOR LOOP TO AUTOMIZE THE DIV FOR EACH PRODUCT AT THE HOME PAGE
function renderProducts(array) {
    for (product of array) {
        // product = { name, price, image }
        // ---- CREATING ELEMENTS ----
        const productCard = document.createElement("div");
        productCard.classList.add("product-cart");
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
    
        // ---- CREATING ELEMENTS ----
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
    
        // ---- CREATING ELEMENTS ----
        const productInfoDiv = document.createElement("div");
    
        
        // ---- CREATING ELEMENTS ----
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        
        // ---- CREATING ELEMENTS ----
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        // ---- ADDING ----
        productInfoFigure.appendChild(productImgCart);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);