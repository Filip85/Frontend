document.addEventListener("DOMContentLoaded", function () {
    init();
});

const SELECTOR_TEMPLATE = "#titleTemplate";
const SELECTOR_GRID = ".grid";
const grid = document.querySelector(SELECTOR_GRID);
let observerr;

let options = {
    root: document,
    threshold: 1,
};

const init = () => {
    fetchPosts().then(data => renderTemplate(data, SELECTOR_TEMPLATE, SELECTOR_GRID))
}

const renderTemplate = (data, template, selector) => {
    const container = document.querySelector(selector);
    const source = document.querySelector(template).innerHTML;
    const compiled = Handlebars.compile(source);
    console.log(source)

    container.innerHTML += compiled({ data });

    createObserver();
}


const createObserver = () => {
    const inter = document.querySelector(".inter");

    observerr = new IntersectionObserver(function (entries, observer) {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fetchPosts().then(data => renderTemplate(data, SELECTOR_TEMPLATE, SELECTOR_GRID))
                // observer.unobserve(entry.target)
                inter.remove();
            }
        }, options)
    });

    observerr.observe(inter);
}

const fetchPosts = () => {
    return fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .catch(error => console.log(error));
}