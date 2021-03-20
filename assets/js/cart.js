let carts = document.querySelectorAll(".add-cart");

let products= [
    {
        name: "Sony Camera",
        label: "sonycamera",
        price: 1500,
        incart: 0
    },
     {
        name: "Nikon Camera",
        label: "nikoncamera",
        price: 1000,
        incart: 0
    },
     {
        name: "Canon Camera",
        label: "canoncamera",
        price: 1800,
        incart: 0
    },
     {
        name: "MacBook",
        label: "macbook",
        price: 1500,
        incart: 0
    },
     {
        name: "Microsoft PC",
        label: "microsoftpc",
        price: 900,
        incart: 0
    },
     {
        name: "HP PC",
        label: "hppc",
        price: 2000,
        incart: 0
    },
     {
        name: "Camera Bag",
        label: "camerabag",
        price: 80,
        incart: 0
    },
     {
        name: "Tripod",
        label: "tripod",
        price: 40,
        incart: 0
    },
     {
        name: "Filter",
        label: "filter",
        price: 20,
        incart: 0
    },
     {
        name: "Adaptors",
        label: "adaptors",
        price: 75,
        incart: 0
    },
     {
        name: "Lenses",
        label: "lenses",
        price: 500,
        incart: 0
    },
     {
        name: "SD Cards",
        label: "sdcards",
        price: 40,
        incart: 0
    }
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers= parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }   
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){

        if(cartItems[product.label] == undefined){
            cartItems = {
                ...cartItems,
                [product.label]: product
            }
        }
        cartItems[product.label].incart += 1;
    }else{
        product.incart = 1;
        cartItems = {
        [product.label]:product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem("totalCost");
    
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }

}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class= "product"> 
                <span class= "names">${item.name}</span> 
                <span class="prices">$${item.price}.00</span> 
                <span class= "numbers">${item.incart}</span> 
                <span class= "item-total">$${item.incart * item.price}.00</span>
            </div>
            
        
            `;
        });

        productContainer.innerHTML += `
            <div class= "cart-total-section">
                <h6 class= "cart-total-title">
                    Cart Total:
                </h6>
                <h6 class= "cart-total">
                    $${cartCost}.00
                </h6>
                <button onclick= "checkOut()" type="button" class="btn btn-secondary">Check Out</button>
            </div>
        `
    }
    
}

function checkOut(){
    alert("Checkout complete!")
    let cartItems = document.getElementsByClassName("products")[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
        localStorage.removeItem("productsInCart")
        localStorage.removeItem("cartNumbers")
        localStorage.removeItem("totalCost")
    }
}


    




onLoadCartNumbers();
displayCart();
