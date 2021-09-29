document.addEventListener("DOMContentLoaded", function () {
    init();
});

const overlay = document.querySelector(".overlay");
const loader = document.querySelector(".loader");
const header = document.querySelector("#header");
const burger = document.querySelector(".js-burger");
const user = document.querySelector(".js-user");
const drawerUser = document.querySelector(".drawer--user");
const drawerBurger = document.querySelector(".drawer--hamburger");
const filters = document.querySelector(".filters");
const postsSearch = document.querySelector(".search__input");
const widthInput = document.querySelector("#widthInput");
const heightInput = document.querySelector("#heightInput");
const totalSquare = document.querySelector(".js-meters");
const totalQuantity = document.querySelector(".js-quantity");
const footer = document.querySelector(".footer");

//templates
const post = document.querySelector(".posts");
const regionSelect = document.querySelector("#regionSelect");
const woodSelect = document.querySelector("#woodSelect");
const POST__TEMPLATE = "#templateHandlebars";
const REGION__TEMPLAT = "#selectHandlebars";
const WOOD__TEMPLATE = "#woodHandlebars";

//global variables
let interval = 0;
let seasson = 0;
let height = 0;
let width = 0;
let woodPerSqrMeter = 0;
let latestPosition = 0;

const options = {
    root: document,
    threshold: [0, 0.25, 0.5, 0.9],
};

const init = () => {
    let status = getSessionStorage();
    checkStatusOfPage(status);

    fetchPosts().then(data => renderTemplate(POST__TEMPLATE, post, data));
    fetchRegions().then(data => renderTemplate(REGION__TEMPLAT, regionSelect, data));

    bindEventListeners();

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(footer);
}

const bindEventListeners = () => {
    document.addEventListener("scroll", checkPositionOfHeader)
    document.addEventListener("click", openDrawer);
    filters.addEventListener("click", filterPosts);
    postsSearch.addEventListener("keyup", debounce(function (event) {
        searchPosts(event)
    }, 200));
    regionSelect.addEventListener("change", searchForWood);
    woodSelect.addEventListener("change", searchPerSqrMeter);
    widthInput.addEventListener("input", takeInput);
    heightInput.addEventListener("input", takeInput);
}

const checkStatusOfPage = (status) => {
    if (status === false) {
        removeOverlay();
    }
    else {
        overlay.classList.remove("overlay");
        loader.classList.remove("loader");
    }
}

const getSessionStorage = () => {
    if (sessionStorage.hasOwnProperty('status') === false) {
        sessionStorage.setItem("status", "false");
        return false;
    }
    else {
        seasson = sessionStorage.getItem("status");
        return seasson;
    }
}

const checkPositionOfHeader = () => {
    // if(window.scrollY > 100) {
    //     if (!header.classList.contains("hidden")) {
    //         header.classList.add("hidden");
    //     }
    // }
    // else {
    //     if (header.classList.contains("hidden")) {
    //         header.classList.remove("hidden");
    //     }
    // }

    if (window.scrollY < latestPosition || window.scrollY < 100) {
        header.classList.remove("hidden");
    }
    else if (window.scrollY > latestPosition) {
        header.classList.add("hidden");
    }

    latestPosition = window.scrollY;
}

const removeOverlay = () => {
    interval = setInterval(function () {
        overlay.classList.remove("overlay");
        loader.classList.remove("loader");
        sessionStorage.setItem('status', 'true');
    }, 2000)
}

const openDrawer = (event) => {
    let button = event.target;

    if (button.classList[1] === "js-user") {
        drawerUser.classList.toggle("show");
    }
    else if (button.classList[1] === "js-burger") {
        drawerBurger.classList.toggle("show");
    }
    else {
        if (drawerBurger.classList.contains("show") && drawerUser.classList.contains("show")) {
            drawerUser.classList.toggle("show");
            drawerBurger.classList.toggle("show");
        }
        else if (drawerUser.classList.contains("show")) {
            drawerUser.classList.toggle("show");
        }
        else if (drawerBurger.classList.contains("show")) {
            drawerBurger.classList.toggle("show");
        }
    }
}

const filterPosts = (event) => {
    let filterButton = event.target.closest("button");

    if (filterButton && filterButton.innerHTML === "Sort by Date") {
        fetchPosts().then(data => sortByPublishedDate(data));
    }
    else if (filterButton && filterButton.innerHTML === "Sort by Author") {
        fetchPosts().then(data => sortByAuthore(data));
    }
    else if (filterButton && filterButton.innerHTML === "Sort by Title") {
        fetchPosts().then(data => sortByTitle(data));
    }
}

const searchPosts = (event) => {
    let array = []
    fetchPosts().then(data => {
        data.forEach(post => {
            if (post.title.toLowerCase().startsWith(event.target.value.toLowerCase())
                || post.description.toLowerCase().startsWith(event.target.value.toLowerCase())) {
                console.log(post.author)
                array.push({ "author": post.author, "published": post.published, "title": post.title, "description": post.description })
            }
        })
        renderTemplate(POST__TEMPLATE, post, array);
    })
}

const searchForWood = (event) => {
    if(event.target.value === "Select region") {
        totalSquare.innerHTML = "width * height";
        totalQuantity.innerHTML = "woodPerSqrMeter * totalSquareMeter";
    }
    else {
        fetchWoods(event.target.value).then(data => renderTemplate(WOOD__TEMPLATE, woodSelect, data))
    }
}

const searchPerSqrMeter = (event) => {
    woodPerSqrMeter = event.target.value;
    if(woodPerSqrMeter === "Select wood type") {
        totalSquare.innerHTML = "width * height";
        totalQuantity.innerHTML = "woodPerSqrMeter * totalSquareMeter";
    }
    else {
        calculate(width, height)
    }
}

const takeInput = (event) => {
    if (event.target.id === "widthInput") {
        width = event.target.value
    }
    else {
        height = event.target.value
    }

    calculate(width, height)
}

const calculate = (width, height) => {
    console.log(width, parseInt(height))
    totalSquare.innerHTML = width * height;
    totalQuantity.innerHTML = (width * height) / parseInt(woodPerSqrMeter);
}

const renderTemplate = (templatee, conatiner, data) => {
    const source = document.querySelector(templatee).innerHTML;
    const template = Handlebars.compile(source);
    const output = template({ data });

    conatiner.innerHTML = output;
}

const sortByPublishedDate = (data) => {
    console.log(data)
    data.sort(function (a, b) {
        var pubA = a.published;
        var pubB = b.published;
        if (pubA < pubB) {
            return -1;
        }
        if (pubA > pubB) {
            return 1;
        }
        return 0;
    });

    renderTemplate(POST__TEMPLATE, post, data)
}


const sortByTitle = (data) => {
    data.sort(function (a, b) {
        var pubA = a.title;
        var pubB = b.title;
        if (pubA < pubB) {
            return -1;
        }
        if (pubA > pubB) {
            return 1;
        }
        return 0;
    });

    renderTemplate(POST__TEMPLATE, post, data)
}

const sortByAuthore = (data) => {
    data.sort(function (a, b) {
        var pubA = a.author;
        var pubB = b.author;
        if (pubA < pubB) {
            return -1;
        }
        if (pubA > pubB) {
            return 1;
        }
        return 0;
    });

    renderTemplate(POST__TEMPLATE, post, data)
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

function handleIntersection(entries, options) {
    entries.forEach(entry => {
        if (entry.intersectionRatio <= 0.25) {
            footer.style.backgroundColor = "#dfe1e6";
        }
        else if (entry.intersectionRatio > 0.25 && entry.intersectionRatio < 0.50) {
            footer.style.backgroundColor = "#7a869a";
        }
        else if (entry.intersectionRatio >= 0.5) {
            footer.style.backgroundColor = "#000000";
        }
    }, options)
}


const fetchPosts = () => {
    return fetch(`http://as-var-croapps.ecx.local:1337/posts`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const fetchRegions = () => {
    return fetch(`http://as-var-croapps.ecx.local:1337/regions`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const fetchWoods = (regionWoodsRelation) => {
    return fetch(`http://as-var-croapps.ecx.local:1337/` + regionWoodsRelation)
        .then(response => response.json())
        .catch(error => console.log(error));
}
