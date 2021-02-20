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
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers= parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }   
}

onLoadCartNumbers();