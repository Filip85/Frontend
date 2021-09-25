/*1.ZADATAK*/
const fibonacci = (n) => {
    if(n === 0) {
        return 1;
    }
    else if(n === 1) {
        return 1;
    }
    else {
        return (fibonacci(n - 1) + fibonacci(n-2));
    }
}

for(let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

/*2: ZADATAK*/

let p = "";
const pattern = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (j === i) {
                break;
            }
            p += "* ";
        }
        console.log(p);
        p = "";
    }
}

pattern(5)


/*3.ZADATAK*/
// alert("1. Dnavno, 2. Tjedno, 3. Mjesecno")
// let howFrequently = Number(prompt("1. Dnavno, 2. Tjedno, 3. Mjesecno", ""))
// let timePeriod = Number(prompt("Kolko dugo", ""))
// let amountOfMoney = Number(prompt("Kolko novaca", ""))

// const savingCalculato = () => {
//     switch (howFrequently) {
//         case 1:
//             return 31 * timePeriod * amountOfMoney;
//         case 2:
//             return 4 * timePeriod * amountOfMoney;
//         case 3:
//             return timePeriod * amountOfMoney;
//         default:
//             return "Krivi broj"
//     }
// }

// console.log(savingCalculato(howFrequently))

const calculator = document.querySelector("main")
let savingDiv = document.querySelector(".my-plan");
let howLong = document.querySelector(".input-how-long");
let howFrequently;
let moneyAmount = document.querySelector(".input-money-amount");
const saving = document.querySelector(".money-amount");

const myPlan = () => {
    
    calculator.addEventListener("click", (event) => {

        if(event.target.type === "checkbox") {
            howFrequently = gethowFrequently(event);
        }

        if(event.target.className === "submit") {
            let savingP = document.createElement("p");
            let deleteS = document.createElement("span");
            if(isNaN(moneyAmount.value) || isNaN(howLong.value)) {
                alert("Please, insert number!");
                return;
            }

            savingP.innerHTML =  moneyAmount.value * howFrequently * howLong.value + " Kn";
            deleteS.innerHTML = "X";
            savingP.appendChild(deleteS);
            savingDiv.appendChild(savingP);
        }

        if(event.target.nodeName === "SPAN") {
            console.log(event.target.parentElement);
            event.target.parentElement.parentElement.removeChild(event.target.parentElement);
        }
    })

    const gethowFrequently = (event) => {
        return event.target.value;
    }
}

myPlan();





