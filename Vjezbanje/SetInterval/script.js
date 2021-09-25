document.addEventListener("DOMContentLoaded", function () {
	init();
});

const circle = document.querySelector(".circle");
const startButton = document.querySelector(".start");
let counter = 0;
let interval = 0;

const init = () => {
    startButton.addEventListener("click", start);
    circle.addEventListener("mouseover", stop)
}

const start = () => {
    counter = 0;

    if(interval) {
        clearInterval(interval);
    }
    
    play()
}

const play = () => {

    interval = setInterval(function() {
        circle.style.top = Math.floor(Math.random() * 500) + "px";
        circle.style.left = Math.floor(Math.random() * 500) + "px";
        counter++;

        if(counter === 10) {
            clearInterval(interval);
        }
    }, 1000)
}

const stop = () => {
    clearInterval(interval);
}