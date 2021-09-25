const input = document.querySelector("input");
const message = document.querySelector(".js-message");
const moreLess = document.querySelector(".js-moreLess");
const playAgainButton = document.querySelector("button");
let randNumber;
let counter = 0;

playAgainButton.disabled = true;

function checkNumber(event) {

    if(event.key === "Enter") {
        if(input.value != "") {
            parseInt(input.value) == randNumber  ? message.innerHTML = "Svaka cast" : 
                message.innerHTML = "Bas si blesav!!!";
    
            // parseInt(input.value) > randNumber ?  moreLess.innerHTML = "MORE" : 
            //     moreLess.innerHTML = "LESS";

            counter++;

            playAgain()
        }
    }
    
    if(input.value === "") {
        message.innerHTML = "";
        moreLess.innerHTML = "";
    }
}

function getRandomNumber() {
    moreLess.innerHTML = "";
    randNumber = Math.floor(Math.random() * 2) + 1;
}

function playAgain() {
    if(counter === 10) {
        playAgainButton.disabled = false;
        input.disabled = true;
        moreLess.innerHTML = "";
        message.innerHTML = "";
        input.value = "";
    }
}


input.addEventListener("keyup", (event) => {
    checkNumber(event)
})

input.addEventListener("keydown", (event) => {
    getRandomNumber()
})

playAgainButton.addEventListener("click", () => {
    input.disabled = false;
})
