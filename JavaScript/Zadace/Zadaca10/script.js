document.addEventListener("DOMContentLoaded", function () {
    init();
});

const SELECTOR_TEMPLATE = "#titleTemplate";
const SELECTOR_GRID = ".grid";
const grid = document.querySelector(SELECTOR_GRID);
let gridHeight = 0;

const init = () => {
    fetchPosts().then(data => renderTemplate(data, SELECTOR_TEMPLATE, SELECTOR_GRID))
}

const renderTemplate = (data, template, selector) => {
    const container = document.querySelector(selector);
    const source = document.querySelector(template).innerHTML;
    const compiled = Handlebars.compile(source);
    console.log(source)

    container.innerHTML += compiled({ data });
    gridHeight = container.offsetHeight;
}

const fetchPosts = () => {
    return fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .catch(error => console.log(error));
}

const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

document.addEventListener("scroll", debounce(function() {
    if(window.scrollY + window.innerHeight >= gridHeight * 0.9) {
        fetchPosts().then(data => renderTemplate(data, SELECTOR_TEMPLATE, SELECTOR_GRID))
    }
}, 1000));





















 // if(gridHeight !== 0) {
    //     console.log("dsdsdsds", container.offsetHeight, gridHeight)
    //     gridHeight = container.offsetHeight;
    // }
    // else {
    //     console.log("dsds", container.offsetHeight)
    //     gridHeight += container.offsetHeight;
    // }
