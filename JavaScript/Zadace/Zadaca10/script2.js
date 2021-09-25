// exerciseTitle('Friday exercise: Password checker');
console.log("dsds");
document.addEventListener("DOMContentLoaded", function () {
    console.log("dsds");
    init();
});

const form = document.querySelector('#password-checker-form');
let password = 0;
let SUM_OF_POINTS;
let characters = [];
const reg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let counter;
let flage = false;
const numbers = /\d/g;
const strenghtBar = document.querySelector(".password-strength-bar");

const init = () => {
    form.addEventListener("keyup", (event) => {
        event.preventDefault();
        password = 0;
        counter = 0;
        SUM_OF_POINTS = 0;

        checkPassword();
        console.log(SUM_OF_POINTS + counter * 10);

        setBarColor(SUM_OF_POINTS + counter * 10);
        SUM_OF_POINTS = 0;

        console.log("book", password.replace(/[^a-zA-Z]+/g, ''))

    })
}
function isLongerThan8Characters() {
    console.log(password)
    if (characters.length < 8) {
        // alert('It must have at least 8 characters!');
        document.querySelectorAll("ul > li")[0].style.color = "red";
    }

    else {
        SUM_OF_POINTS += 10;
        counter++;

        document.querySelectorAll("ul > li")[0].style.color = "green";
    }
}

function containsLowercaseLetter() {

    if(password === password.toLowerCase() || password != password.toUpperCase() || !password) {
        SUM_OF_POINTS += 5;
        counter++;
        document.querySelectorAll("ul > li")[1].style.color = "green";
    }
    else {
        document.querySelectorAll("ul > li")[1].style.color = "red";
    }
}

function containsUppercaseLetter() {

    if(password === password.toUpperCase() || password != password.toLowerCase()) {
        console.log("uper", password.toUpperCase())
        SUM_OF_POINTS += 5;
        counter++;
        document.querySelectorAll("ul > li")[2].style.color = "green";
    }
    else {
        console.log("passsword", password)
        document.querySelectorAll("ul > li")[2].style.color = "red";
    }
}

function containsADigit() {

    if(numbers.test(password)) {
        SUM_OF_POINTS += 5;
        counter++;
        document.querySelectorAll("ul > li")[3].style.color = "green";
    }
    else {
        document.querySelectorAll("ul > li")[3].style.color = "red";
    }
}

function containsASymbol() {
    console.log(reg.test(password))
    if(reg.test(password)) {
        SUM_OF_POINTS += 10;
        counter++;
        document.querySelectorAll("ul > li")[4].style.color = "green";
    }
    else {
        document.querySelectorAll("ul > li")[4].style.color = "red";
    }
}

function containsFiveUniqueCharacters(flage) {
    let characters = password.split("");
    let set = new Set(characters);

    if(set.size === 5 && flage === false) {
        SUM_OF_POINTS += 10;
        counter++;
        flage = true
        document.querySelectorAll("ul > li")[5].style.color = "green";
    }
    else {
        document.querySelectorAll("ul > li")[5].style.color = "red";
    }

}

const setBarColor = (width) => {
    console.log("width", width)
    strenghtBar.style.width = "0";

    if(width <= 50) {
        strenghtBar.style.width = width + "%";
        strenghtBar.style.backgroundColor = "red"
    }
    else if(width > 50 && width <= 75) {
        strenghtBar.style.width = width + "%"
        strenghtBar.style.backgroundColor = "orange"
    }
    else if(width > 75 && width < 100) {
        strenghtBar.style.width = width + "%"
        strenghtBar.style.backgroundColor = "yellow"
    }
    else {
        strenghtBar.style.width = "100%";
        strenghtBar.style.backgroundColor = "green"
    }
}

function checkPassword() {
    password = form.elements['password'].value
    characters = password.split("");

    isLongerThan8Characters();
    containsLowercaseLetter();
    containsUppercaseLetter()
    containsASymbol();
    containsADigit();
    containsFiveUniqueCharacters(flage);
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // isLongerThan8Characters();
// })
