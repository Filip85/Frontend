document.addEventListener("DOMContentLoaded", function () {
    init();
});

const form = document.querySelector("form");
const toast = document.querySelector(".toast")
const error = document.querySelector("h2");
const msg = document.querySelector("p");
const emailRegex = new RegExp('^[^ ]+@[^ ]+\.[a-z]{2,3}$');
const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[?!@$_*])[a-zA-Z0-9?!@$_*]{12,}');
const inputs = document.querySelectorAll("input");

const init = () => {
    bindEventListenrs();
}

const bindEventListenrs = () => {
    document.querySelector("form").addEventListener("submit", submitForm);
    inputs.forEach(input => {
        input.addEventListener("keyup", validateForm)
    })
    document.querySelector(".toast").addEventListener("click", closePopUp);
}

const submitForm = (event) => {
    event.preventDefault();

    // validateForm();
}

const validateForm = (event) => {
    let string = "";
    let input = event.target.closest(".input");

    if(input.value.length === 0) {
        input.removeAttribute('style');
    }
    else {
        if(input && input === form.elements['username']) {
            if(form.elements['username'].value && form.elements['username'].value.length < 8) {
                input.style.borderColor = "rgb(110, 7, 97)";
            }
            else {
                input.style.borderColor = "rgb(253, 169, 211)";
            }
        }
        else if(input && input === form.elements['password']) {
            if(form.elements['password'].value && passwordRegex.test(form.elements['password'].value) === false) {
                input.style.borderColor = "rgb(110, 7, 97)";
            }
            else {
                input.style.borderColor = "rgb(253, 169, 211)";
            }
        }
        else if(input && input === form.elements['rpassword']) {
            if(form.elements['password'].value != form.elements['rpassword'].value) {
                input.style.borderColor = "rgb(110, 7, 97)";
            }
            else {
                input.style.borderColor = "rgb(253, 169, 211)";
            }
        }
        else if(input && input === form.elements['email']) {
            if(form.elements['email'].value && emailRegex.test(form.elements['email'].value) === false) {
                input.style.borderColor = "rgb(110, 7, 97)";
            }
            else {
                input.style.borderColor = "rgb(253, 169, 211)";
            }
        }
    }
}

// const validateForm = (event) => {
//     let string = "";

//     if (!form.elements['name'].value
//         || !form.elements['surname'].value
//         || !form.elements['username'].value
//         || !form.elements['password'].value
//         || !form.elements['rpassword'].value
//         || !form.elements['email'].value) {
//             string = "Ups! Formica je praznica";
//         }
//     else if (form.elements['username'].value.length < 8) {
//         string = "Username je manji od 8 znakova";
//     }
//     else if (form.elements['password'].value != form.elements['rpassword'].value) {
//         string = "Lozinke se ne pokalpaju";
//     } 
//     else if (form.elements['password'].value < 12) {
//         string = "Lozinka treba imati barem 12 znakova";
//     }
//     else {
//         if (emailRegex.test(form.elements['email'].value) === false) {
//             string = "Regexi mi život upropastili, email";
//         }
//         else if (passwordRegex.test(form.elements['password'].value) === false) {
//             string = "Kriva lozinka, sorry not sorry";
//         }
//         else {
//             error.innerHTML = "SUCCESS";
//             string = "My man!!!";
//         }
//     }

//     toast.style.background = error.innerHTML === "Error" ? "red" : "#29bb27";
//     msg.innerHTML = string;
//     toast.classList.toggle("hidden");
// }

const closePopUp = (event) => {
    const closeButton = event.target.closest(".toast__close");

    if(closeButton) {
        toast.classList.toggle("hidden");
    }
}