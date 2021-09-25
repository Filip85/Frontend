const form = document.querySelector("#form");
const reg = /^[a-z\.]{3,}@[a-z]{3,}\.[a-z]{2,}$/;


form.addEventListener("submit", (event) => {
    event.preventDefault();

    for(let i = 0; i < form.elements.length - 1; i++) {
        checkInput(form.elements[i]);
    }

    checkPasswords(form.elements["password"], form.elements["password2"]);
    checkEmail(form.elements["email"]);
})


const checkInput = (input) => {
    if(input.value === "") {
        input.parentElement.querySelector(".username").style.color = "red";
    }
    else {
        input.parentElement.querySelector(".username").style.color = "green";
    }
}

const checkEmail = (email) => {
    console.log(email.value ,reg.test(email.value))
    if(!reg.test(email.value)) {
        email.parentElement.querySelector(".username").style.color = "red";
    }
}

const checkPasswords = (password, password2) => {
    // console.log(password.value, password2)
    if(password.value !== password2.value) {
        password.parentElement.querySelector(".username").style.color = "red";
        password2.parentElement.querySelector(".username").style.color = "red";
    }
}