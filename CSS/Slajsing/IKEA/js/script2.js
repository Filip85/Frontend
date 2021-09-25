document.addEventListener("DOMContentLoaded", function () {
    const product = new Products();

    if (window.location.pathname === "/indexCart2.html") {
        console.log("tu sam")
        product.getProductsFromLocalStorage();
    }
    else if (window.location.pathname === "/indexDelivery.html") {
        console.log("gggg")
        product.getPriceFromLocalStorage();
        product.renderMyProducts();
    }
});

// const ccvValidation = (event) => {
//     event.target.value = event.target.value.replace(/[^\dA-Z]/g, '');
// } _> maxlenght ="3"

// document.getElementById('iban').addEventListener('input', function (e) {
//     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
//   });

// var newStr = str.slice(0,3) + ' / ' + str.slice(3)

const grid = document.querySelector(".card-wrapper");
const moreBaby = document.querySelector(".pagination__more");
const numberOfProducts = document.querySelector(".list__item-number");
const cart = document.querySelector(".cart");
const deliveryContainer = document.querySelector(".delivery");
const form = document.querySelector(".js-form1")
const form2 = document.querySelector(".js-form2")
const buttonPay = document.querySelector(".button__pay");
const noPdvPrice = document.querySelector(".js-noPDV");
const pdv = document.querySelector(".js-pdv");
const noDelivery = document.querySelector(".js-noDelivery");
const yaaasDelivery = document.querySelector(".js-delivery");
const totalPrice = document.querySelector(".aside__price-alt");
const formInputs = document.querySelectorAll(".form__input");
const personalInformation = document.querySelectorAll(".js-personal");
// myProductsTemplate
const myProductsImages = document.querySelector(".card-wrapper--aside");
const deliveryBody = document.querySelector(".delivery__body");
const deliveryButtons = document.querySelectorAll(".delivery__bodyButton-wrapper");
const packet = document.querySelector(".js-packet");

const cardNumber = document.querySelector("#cardNumber");
const cardDate = document.querySelector("#cardDate");
const ccv = document.querySelector("#CCV");

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

let selectQuantity = 0;

let products = [];
let priceArray = 0;
let productsFromLocalStorage = [];

class Products {
    id = -1;

    constructor() {
        this.init();
        // this.id = -1;
    }

    init() {
        this.getProducts()
        this.#bindEventListeners();
        this.checkLocalStorage();
    }

    #bindEventListeners() {
        moreBaby && moreBaby.addEventListener("click", this.getProducts.bind(this));
        grid && grid.addEventListener("click", this.findClosestCartButton.bind(this));
        cart && cart.addEventListener("change", this.changeQuantityOfProduct2.bind(this))
        cart && cart.addEventListener("click", this.removeItemFromCart.bind(this))
        deliveryContainer && deliveryContainer.addEventListener("click", this.nextStep.bind(this))
        form && form.addEventListener("submit", this.submitForm.bind(this))
        buttonPay && buttonPay.addEventListener("clikc", this.pleasePay.bind(this))
        cardNumber && cardNumber.addEventListener('input', this.cardNumberValidation);
        ccv && ccv.addEventListener('input', this.ccvValidation);
        cardDate && cardDate.addEventListener('input', this.dateValidation);
        menu && menu.addEventListener('click', this.menuClose);
        burger && burger.addEventListener("click", this.menuOpen);
        console.log(burger)
    }

    checkLocalStorage() {
        if (localStorage.getItem("products") === null) {
            localStorage.setItem("products", JSON.stringify(products));
            localStorage.setItem("price", JSON.stringify(priceArray));

            products = JSON.parse(localStorage.getItem("products") || "[]");
            priceArray = JSON.parse(localStorage.getItem("price") || "[]");
        }
        else {
            products = JSON.parse(localStorage.getItem("products") || "[]");
            priceArray = JSON.parse(localStorage.getItem("price") || "[]");
        }

        this.getNumberOfProducts();
    }

    getProducts() {
        this.id++;
        this.fetchProducts().then(data => this.renderTemplate("#productsTemplate", ".card-wrapper", data.moreProducts.productWindow));
    }

    findClosestCartButton(event) {
        const basketButton = event.target.closest(".card__basket");

        if (basketButton) {
            this.changeQuantityOfProduct(basketButton)
            this.saveToLocalStorage()
            this.getNumberOfProducts();
        }
    }

    saveToLocalStorage = () => {
        // localStorage.setItem("price", JSON.stringify(priceArray))
        localStorage.setItem("products", JSON.stringify(products));
    }

    savePriceToLocalStorage = () => {
        localStorage.setItem("price", JSON.stringify(priceArray))
    }

    getNumberOfProducts = () => {

        products = JSON.parse(localStorage.getItem("products"));
        let num = 0;

        products.forEach(product => num += parseInt(product.quantity))

        if (numberOfProducts) {
            numberOfProducts.dataset.count = num;
            numberOfProducts.innerHTML = numberOfProducts.dataset.count;
        }
    }

    getProductsFromLocalStorage = () => {
        productsFromLocalStorage = [];
        console.log("hej")

        products = JSON.parse(localStorage.getItem("products"));

        this.fetchAllProducts().then(data => {

            this.filterMyProducts(data);
            this.renderTemplate("#cartTemplate", ".cart__list", productsFromLocalStorage);
        });

        this.getPriceFromLocalStorage();
    }

    getPriceFromLocalStorage = () => {
        priceArray = JSON.parse(localStorage.getItem("price"));
        let price = 0
        console.log(yaaasDelivery.innerHTML)

        if(noDelivery) {
            noDelivery.innerHTML = priceArray + " kn";
            price = noDelivery.innerHTML
        }
        if(noPdvPrice) {
            noPdvPrice.innerHTML = priceArray - (priceArray * 0.25) + " kn";
        }
        if(pdv) {
            pdv.innerHTML = priceArray * 0.25 + " kn";
        }

        totalPrice.innerHTML = parseInt(price) + parseInt(yaaasDelivery.innerHTML);
    }

    renderMyProducts = () => {
        this.fetchAllProducts().then(this.filterMyProducts);
        console.log(deliveryBody)
        deliveryBody.addEventListener("click", this.deliveryOption);
    }

    filterMyProducts = (data) => {
        products = JSON.parse(localStorage.getItem("products"));
        
        for (let i = 0; i < products.length; i++) {
            console.log(products[i].id)
            data.moreProducts.productWindow.forEach(data => {

                if (parseInt(data.itemNo) == products[i].id) {
                    const productObj = {
                        itemNo: data.itemNo,
                        mainImageUrl: data.mainImageUrl,
                        name: data.name,
                        price: data.price.wholeNumber,
                        typeName: data.typeName,
                        priceUnit: data.priceUnit,
                        quantity: products[i].quantity,
                    }

                    productsFromLocalStorage.push(productObj);
                    return;
                }
            })
        }
        
        if (window.location.pathname === "/indexDelivery.html") {
            this.renderTemplate("#myProductsTemplate", ".card-wrapper--aside", productsFromLocalStorage);
        }
    }

    menuOpen = (event) => {
        console.log(event.target)
        menu.classList.toggle("active");
    }

    menuClose = (event) => {
        const closeButton = event.target.closest(".menu__X");
        
        console.log(closeButton);

        if(closeButton) {
            console.log(menu)
            menu.classList.toggle("active");
        }
    }

    deliveryOption = (event) => {
        const deliveryButton = event.target.closest(".delivery__bodyButton");

        console.log(document.querySelectorAll(".delivery__bodyButton")[0])

        if(deliveryButton && deliveryButton === document.querySelectorAll(".delivery__bodyButton")[0]) {
            console.log("prvi")
            console.log(yaaasDelivery);
            if(deliveryButtons[0].classList.contains("delivery__bodyButton-active") === false) {
                deliveryButtons[0].classList.toggle("delivery__bodyButton-active");
                deliveryButtons[1].classList.toggle("delivery__bodyButton-active");
                packet.classList.toggle("hidden");
                yaaasDelivery.innerHTML = 59
                this.getPriceFromLocalStorage()
                console.log(yaaasDelivery);
            }
        }
        else if(deliveryButton && deliveryButton === document.querySelectorAll(".delivery__bodyButton")[1]) {
            console.log("drugi")
            if(deliveryButtons[1].classList.contains("delivery__bodyButton-active") === false) {
                deliveryButtons[0].classList.toggle("delivery__bodyButton-active");
                deliveryButtons[1].classList.toggle("delivery__bodyButton-active");
                packet.classList.toggle("hidden");
                yaaasDelivery.innerHTML = 0;
                this.getPriceFromLocalStorage()
            }
        }
    }

    filterById = (data) => {
        console.log("hmm")
        //mozda može sa find
        for (let i = 0; i < products.length; i++) {
            console.log(products[i].id)
            data.moreProducts.productWindow.forEach(data => {

                if (parseInt(data.itemNo) == products[i].id) {
                    const productObj = {
                        itemNo: data.itemNo,
                        mainImageUrl: data.mainImageUrl,
                        name: data.name,
                        price: data.price.wholeNumber,
                        typeName: data.typeName,
                        priceUnit: data.priceUnit,
                        quantity: products[i].quantity,
                    }

                    productsFromLocalStorage.push(productObj);
                    return;
                }
            })
        }
    }

    changeQuantity = (select, event) => {
        products = JSON.parse(localStorage.getItem("products"));

        this.changeQuantityOfProduct2(select, event.target.value)
        this.saveToLocalStorage();
        this.getNumberOfProducts()
    }

    renderTemplate(templatee, wrapper, products) {
        const source = document.querySelector(templatee).innerHTML;

        const cardWrapper = document.querySelector(wrapper);

        const template = Handlebars.compile(source);
        const output = template({ products });

        cardWrapper.innerHTML += output;

        this.totalPrice();

        // selectQuantity = document.querySelectorAll("#quantity");

        // selectQuantity.forEach(select => {
        //     select.addEventListener("change", this.changeQuantity.bind(this, select));
        // })
    }

    changeQuantityOfProduct = (basketButton) => {

        products = JSON.parse(localStorage.getItem("products")) || [];
    
        let productFind = products.findIndex(product => product.id === basketButton.dataset.id)
        console.log(productFind)
        if(productFind > -1) {
            products[productFind].quantity = products[productFind].quantity + 1;
        }
        else {
            const productObj = {
                "id": basketButton.dataset.id,
                "quantity": 1,
                "priceNumeral": basketButton.dataset.price
            }
            products.push(productObj)
        }
        // ovdje sa maknuti SOME
        // if (products.some(obj => obj.id === basketButton.dataset.id)) {
        //     products.find(obj => {
        //         if (obj.id === basketButton.dataset.id) {
        //             obj.quantity = obj.quantity + 1;
        //         }
        //     })
        // }
        // else {
        //     const productObj = {
        //         "id": basketButton.dataset.id,
        //         "quantity": 1,
        //         "priceNumeral": basketButton.dataset.price
        //     }
        //     products.push(productObj)
        // }
    }

    changeQuantityOfProduct2 = (event) => {
        const select = event.target.closest(".cart__quantity");

        products.find(obj => {
            if (parseInt(obj.id) === parseInt(select.dataset.id)) {
                obj.quantity = event.target.value;

                select.options[0].value = event.target.value;
                select.options[0].innerHTML = event.target.value;

                this.saveToLocalStorage();
                this.getNumberOfProducts()
                this.totalPrice();
            }
        })
    }

    totalPrice = () => {
        const listItems = document.querySelectorAll(".cart__item");

        let total = 0;
        let i = 0

        products = JSON.parse(localStorage.getItem("products"));

        products.forEach(product => {
            total = total + product.quantity * (listItems[i].dataset.price)
            listItems[i].dataset.totalPrice = product.quantity * listItems[i].dataset.price
            i++;
        })

        priceArray = total

        this.savePriceToLocalStorage()

        this.getPriceFromLocalStorage()
    }

    removeItemFromCart = (event) => {

        const removeLink = event.target.closest(".cart__remove");

        if (removeLink) {
            const cartItem = removeLink.closest(".cart__item");
            products = JSON.parse(localStorage.getItem("products"));
            let i = 0;

            products.forEach(product => {

                if (product.id === cartItem.dataset.id) {
                    products.splice(i, 1);
                    cartItem.parentNode.removeChild(cartItem)

                    console.log(product.id, cartItem.dataset.id, i)
                    return;
                }

                i++;
            })
            this.saveToLocalStorage()
            this.getNumberOfProducts();
        }
    }

    nextStep = (event) => {
        const nextButton = event.target.closest(".delivery__nextButton");

        if (nextButton && nextButton === document.querySelectorAll(".delivery__nextButton")[0]) {
            console.log(document.querySelectorAll(".delivery__nextButton")[1]);
            document.querySelector(".js-deliveryOne").classList.toggle("hidden");
            document.querySelectorAll(".js-deliveryInfo")[0].classList.toggle("hidden");
        }
        // else if (nextButton && nextButton === document.querySelectorAll(".delivery__nextButton")[1]) {
        //     console.log(document.querySelectorAll(".delivery__nextButton")[1])
        //     document.querySelectorAll(".js-deliveryInfo")[1].classList.toggle("hidden");
        //     document.querySelector("form").classList.toggle("hidden");
        //     this.deliveryInformation();
        // }
    }

    submitForm = (event) => {
        const validation = this.validateForm(event);
        if(validation) {
            document.querySelectorAll(".js-deliveryInfo")[1].classList.toggle("hidden");
            document.querySelector("form").classList.toggle("hidden");
            this.customerInfo();
        }
        else {
            alert("Ups!!! Something went wrong");
        }
    }

    customerInfo = () => {
        console.log(form.elements['firstname'].value);
        
        // for(let i = 0; i < formInputs.length; i++) {
        //     formInputs[i]
        // }

        personalInformation[0].innerHTML = form.elements['firstname'].value + " " + form.elements['surname'].value
        personalInformation[1].innerHTML = form.elements['street'].value
        personalInformation[2].innerHTML = form.elements['city'].value
        personalInformation[3].innerHTML = form.elements['email'].value
        personalInformation[4].innerHTML = form.elements['tel'].value
    }

    validateForm = (event) => {
        event.preventDefault();
        
        if (!form.elements['firstname'].value 
            || !form.elements['surname'].value
            || !form.elements['street'].value
            || !form.elements['city'].value
            || !form.elements['email'].value
            || !form.elements['tel'].value) {
                alert("Ups!!! Something is missing!!!");
                return false
        }
        else {
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.elements['email'].value)
                ) {
                    alert("Wrong email or telephone number!");
                    return false;
                }
            else {
                console.log("YAAAS")
                return true;
            }
        }
    }

    pleasePay = (event) => {
        event.preventDefault();
        // this.validateCard;
        // this.cardNumberValidation;
    }

    validateCard = () => {
        if(!form.elements['cardNumber'].value 
        || !form.elements['cardDate'].value
        || !form.elements['CVV'].value) {
            alert("Ups!!! Something is missing!!!");
            return false
        }
        else {
            console.log("supppererer")
            return true
        }
    }

    cardNumberValidation = (event) => {
        event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    dateValidation = (event) => {
        event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/, '$1/').trim();
    }

    ccvValidation = (event) => {
        event.target.value = event.target.value.replace(/[^\dA-Z]/g, '');
    }

    fetchProducts = () => {
        return fetch(`/data/products${this.id}.json`)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    fetchAllProducts = () => {
        return fetch(`/data/products_all.json`)
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}
















    // filterById = (product) => {
    //     let counter = 0;


    //     // if (product.itemNo === products[counter].id) {
    //     //     const productObj = {
    //     //         itemNo: product.itemNo,
    //     //         mainImageUrl: product.mainImageUrl,
    //     //         name: product.name,
    //     //         price: product.price.wholeNumber,
    //     //         typeName: product.typeName,
    //     //         priceUnit: product.priceUnit,
    //     //         quantity: products.quantity,
    //     //     }

    //     //     productsFromLocalStorage.push(productObj);
    //     //     counter++;
    //     // }

    //     // products.forEach(obj => {
    //     //     if (obj.id === product.itemNo) {

    //     //         const productObj = {
    //     //             itemNo: product.itemNo,
    //     //             mainImageUrl: product.mainImageUrl,
    //     //             name: product.name,
    //     //             price: product.price.wholeNumber,
    //     //             typeName: product.typeName,
    //     //             priceUnit: product.priceUnit,
    //     //             quantity: obj.quantity,
    //     //         }

    //     //         productsFromLocalStorage.push(productObj);
    //     //     }
    //     // })
    // }



    // changeQuantityOfProduct = (basketButton) => {

    //     if (products.length === 0) {
    //         const productObj = {
    //             "id": basketButton.dataset.id,
    //             "quantity": 1
    //         }

    //         products.push(productObj);
    //         localStorage.setItem("products", JSON.stringify(products));
    //     }
    //     else {
    //         if (products.some(obj => obj.id === basketButton.dataset.id)) {
    //             products.forEach(obj => {
    //                 if (obj.id === basketButton.dataset.id) {
    //                     obj.quantity = obj.quantity + 1;
    //                 }
    //             })
    //         }
    //         else {
    //             const productObj = {
    //                 "id": basketButton.dataset.id,
    //                 "quantity": 1
    //             }
    //             products.push(productObj)
    //         }
    //     }
    // }
























