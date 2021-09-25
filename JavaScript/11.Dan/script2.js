const box = document.querySelector("div")
const button1 = document.querySelector(".js-change")
const button2 = document.querySelector(".js-add")

button1.addEventListener("click", () => {
    box.classList.toggle("color-red");
    box.classList.toggle("color-black");
})

button2.addEventListener("click", () => {
    box.classList.toggle("green-border");
})
