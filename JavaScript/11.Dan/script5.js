const button = document.querySelector("#btn");
const circle = document.querySelector("#target");
let counter;
let interval;
let time = 1000;

button.addEventListener("click", () => {

    clearInterval(interval);
    counter = 0;
    
    jump();
})

circle.addEventListener("mouseover", () => {
    clearInterval(interval);
    counter = 0;
})

const jump = () => {
     interval = setInterval(function() {

        circle.style.top = Math.floor(Math.random() * 100) + "%";
        circle.style.left = Math.floor(Math.random() * 100) + "%";
    
        counter++;
    
        if(counter === 20) {
            clearInterval(interval);
            counter = 0;
        }
    }, 1000)
}
