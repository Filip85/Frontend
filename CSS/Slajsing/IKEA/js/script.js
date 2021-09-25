document.addEventListener("DOMContentLoaded", function () {
    const product = new Products();

    if (window.location.pathname === "/indexCart.html") {
        console.log("tu sam")
        product.getProductsFromLocalStorage();
    }
});

const grid = document.querySelector(".card-wrapper");
const moreBaby = document.querySelector(".pagination__more");
const numberOfProducts = document.querySelector(".list__item-number");
let selectQuantity = 0;

let products = [];
let productsFromLocalStorage = [];
let counter;
let temp = 0;

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
    }

    checkLocalStorage() {
        products = localStorage.getItem("numberOfProducts");

        products = products ? products.split(',') : [];

        this.getNumberOfProducts();
    }

    getProducts() {
        this.id++;
        this.fetchProducts().then(data => this.renderTemplate("#productsTemplate", ".card-wrapper", data.moreProducts.productWindow));
    }

    getProductsFromLocalStorage = () => {
        productsFromLocalStorage = [];
        counter = -1;

        const localStorageProductsIds = localStorage.getItem("numberOfProducts").split(",")
        this.fetchAllProducts().then(data => {

            data.moreProducts.productWindow.filter(this.filterById);

            this.renderTemplate("#cartTemplate", ".cart__list", productsFromLocalStorage);
        });
    }

    findClosestCartButton(event) {
        const basketButton = event.target.closest(".card__basket");

        if (basketButton) {
            products.push(basketButton.dataset.id);
            this.saveToLocalStorage(products)
            this.getNumberOfProducts();
        }
    }

    changeQuantity = (select, event) => {

        let newQuantity = event.target.value;
        let counterr = 0;

        if(newQuantity >= select.options[0].value) {
            for(let i = 0; i < Math.abs(select.options[0].value - event.target.value); i++) {
                products.push(select.dataset.id)
                this.saveToLocalStorage(products);
            }

            select.options[0].value = newQuantity;
            select.options[0].innerHTML = newQuantity;

            this.getNumberOfProducts();
        }
        else {
            const localStorageProductsIds = localStorage.getItem("numberOfProducts").split(",");
            for(let i = 0; i < localStorageProductsIds.length; i++){ 
                if(localStorageProductsIds[i] === select.dataset.id) {
                    localStorageProductsIds.splice(i, 1);
                    i--;
                    counterr++;
                }
                if(counterr ===  Math.abs(select.options[0].value - event.target.value)) {
                    break;
                }
            }

            products = localStorageProductsIds;

            select.options[0].value = newQuantity;
            select.options[0].innerHTML = newQuantity;
            
            this.saveToLocalStorage(localStorageProductsIds)
            this.getNumberOfProducts()
        }
    }


    filterById = (product) => {
        counter++;
        const localStorageProductsIds = localStorage.getItem("numberOfProducts").split(",");

        localStorageProductsIds.forEach(id => {
            if (id === product.itemNo) {
                
                const productObj = {
                    itemNo: product.itemNo,
                    mainImageUrl: product.mainImageUrl,
                    name: product.name,
                    price: product.price.wholeNumber,
                    typeName: product.typeName,
                    priceUnit: product.priceUnit,
                    quantity: 1,
                }
                
                if(productsFromLocalStorage.some(product => product.itemNo === productObj.itemNo)) {
                    productsFromLocalStorage[counter].quantity++;
                }
                else {
                    productsFromLocalStorage.push(productObj);
                }
            }
        })
    }

    renderTemplate(templatee, wrapper, products) {
        const source = document.querySelector(templatee).innerHTML;

        const cardWrapper = document.querySelector(wrapper);

        const template = Handlebars.compile(source);
        const output = template({ products });

        cardWrapper.innerHTML += output;

        selectQuantity = document.querySelectorAll("#quantity");
        console.log(selectQuantity)
        selectQuantity.forEach(select => {
            select.addEventListener("change", this.changeQuantity.bind(this, select));
        })
    }

    saveToLocalStorage = (products) => {
        localStorage.setItem("numberOfProducts", products);
    }

    getNumberOfProducts = () => {
        numberOfProducts.dataset.count = products.length;
        numberOfProducts.innerHTML = numberOfProducts.dataset.count;
    }

    showHidePopup = () => {
        
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

// const init = () => {
//     const product = new Products()
//     console.log(product)
// }

// const init = () => {

//     fetchPosts(id).then(data => renderTemplate(data.moreProducts.productWindow));
//     bindEventListeners();

//     products = localStorage.getItem("numberOfProducts");

//     products = products ? products.split(',') : [];
//     getNumberOfProducts();
// }

// const renderTemplate = (products) => {
//     console.log(products);
//     const source = document.querySelector('#productsTemplate').innerHTML;

//     console.log(source)
//     const cardWrapper = document.querySelector('.card-wrapper');
//     console.log(cardWrapper)

//     const template = Handlebars.compile(source);
//     const output = template({ products });

//     cardWrapper.innerHTML += output;
// }

// const bindEventListeners = () => {
//     console.log("hojo", id)
//     document.querySelector(".pagination__more").addEventListener("click", () => {
//         id++;
//         fetchPosts(id).then(data => renderTemplate(data.moreProducts.productWindow));
//     })

//     grid.addEventListener("click", (event) => {
//         console.log(grid)
//         const basketButton = event.target.closest(".card__basket");

//         if (basketButton) {
//             products.push(basketButton.dataset.id);
//             saveToLocalStorage();
//             getNumberOfProducts()
//         }
//     })
// }

// const saveToLocalStorage = () => {
//     localStorage.setItem("numberOfProducts", products);
// }

// const getNumberOfProducts = () => {
//     numberOfProducts.dataset.count = products.length;
//     numberOfProducts.innerHTML = numberOfProducts.dataset.count;
// }

// const checkUrl = () => {
//     console.group(NEW_URL)
// }

// const fetchPosts = (id) => {
//     return fetch(`/data/products${id}.json`)
//         .then(response => response.json())
//         .catch(error => console.log(error));
// }


























// let BASE_URL = "http://127.0.0.1:5502/index.html";
// let NEW_URL = 0;

const appendUrl = () => {
    //     var url = new URL(BASE_URL);
    //     var search_params = url.searchParams;

    // // add "topic" parameter
    //     search_params.set('page', id);

    //     url.search = search_params.toString();

    //     var NEW_URL = url.toString();
    //     window.location.assign(NEW_URL);
    // window.location.replace("http://127.0.0.1:5502/index.html?page=" + id);
}





    // const loadProducts = (id) => {
//     id++;
//     console.log("dsds", id)
//     fetchPosts(id).then(data => console.log(data));
// }

