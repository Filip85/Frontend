let buttons = document.querySelectorAll("button")
const nameH = document.querySelector("h1");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        
        if(event.target.className === "inline-style") {
            if(nameH.getAttribute("style")) {
                nameH.removeAttribute("style");
                return;
            }
            nameH.style.color = "red";
        }
        else {
            if(nameH.getAttribute("style")) {
                nameH.removeAttribute("style");
                nameH.classList.toggle("name");
                return;
            }
            nameH.classList.toggle("name");
        }
    })
})