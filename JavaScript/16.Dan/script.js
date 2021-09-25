//1. Zadatak
const height = document.querySelector(".js-height");
const width = document.querySelector(".js-width");

const dimensions = () => {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}

// window.onresize = dimensions;


//2. Zadatak
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

window.addEventListener("resize", debounce(function () {
    console.log("debounce");
}, 1000))


const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};
window.addEventListener(
    'resize',
    throttle(function (evt) {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }, 250)
);


//3. zadatak:
const button = document.querySelector(".js-top");
const header = document.querySelector(".header");

const debounce1 = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

button.addEventListener("click", debounce1(function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    console.log("top 1");
}, 1000));

document.addEventListener("scroll", debounce1(function () {
    console.log(window.scrollY)
    if (window.scrollY === 0) {
        header.style.display = "block";
    }

    if (window.scrollY >= 100) {
        header.style.display = "none";
    }
}, 1000));

//4. Zadatka

const target = document.querySelectorAll("img");

let options = {
    root: document,
    threshold: 1,
};

const observer = new IntersectionObserver(function (entries, observer) {
    console.log("dsd", entries)
    entries.forEach(entry => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.src = "https://picsum.photos/200?300?r5"
            observer.unobserve(entry.target)
        }
    }, options)
});


target.forEach(image => {
    observer.observe(image);
})

