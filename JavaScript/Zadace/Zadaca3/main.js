// function timePassCalculator(date) {
//     let todaysDate = new Date()
//     let d = Date.now()
//     let d2 = new Date(d)
//     let year = 0
//     console.log(d2.toLocaleDateString())
//     // let y = todaysDate.getMonth()
//     // let y2 = date.getMonth()

//     if(todaysDate.getFullYear() <= date.getFullYear() 
//         && todaysDate.getDate()  === date.getDate() 
//         && todaysDate.getMonth() === date.getMonth()) {
//             return "Y: " + (Math.abs(todaysDate.getFullYear() - date.getFullYear()) - 1)
//             + ", M: " + "12" 
//             + ", D: " + (Math.abs(todaysDate.getDate() - date.getDate()))
//             + ", H: " + (Math.abs(24 - todaysDate.getHours()))
//             + ", M: " + (Math.abs(60 - todaysDate.getMinutes()));
//         }
//     if(todaysDate.getDate()  <= date.getDate() 
//         && todaysDate.getMonth() <= date.getMonth()
//         && todaysDate.getFullYear() <= date.getFullYear()) {
//             if(todaysDate.getFullYear() < date.getFullYear()) {
//                 year = Math.abs(date.getFullYear() - todaysDate.getFullYear()) - 1
//             }
//             return "Y: " + year
//             + ", M: " + (Math.abs(todaysDate.getMonth() - date.getMonth()))
//             + ", D: " + (Math.abs(todaysDate.getDate() - date.getDate()))
//             + ", H: " + (Math.abs(24 - todaysDate.getHours()))
//             + ", M: " + (Math.abs(60 - todaysDate.getMinutes()))
//         }
//         else {
//             return "Y: " + (Math.abs(todaysDate.getFullYear() - date.getFullYear()))
//             + ", M: " + (Math.abs(todaysDate.getMonth() - date.getMonth()))
//             + ", D: " + (Math.abs(todaysDate.getDate() - date.getDate()))
//             + ", H: " + (Math.abs(todaysDate.getHours() - date.getHours()))
//             + ", M: " + (Math.abs(todaysDate.getMinutes() - date.getMinutes()))
//         }
//     console.log(date.getHours())
//     console.log(date.getDate(), date.getFullYear())
//     // return "Y: " + (Math.abs(todaysDate.getFullYear() - date.getFullYear()))
//     // + ", M: " + (Math.abs(todaysDate.getMonth() - date.getMonth()))
//     // + ", D: " + (Math.abs(todaysDate.getDate() - date.getDate()))
//     // + ", H: " + (Math.abs(todaysDate.getHours() - date.getHours()))
//     // + ", M: " + (Math.abs(todaysDate.getMinutes() - date.getMinutes()))
// }



// console.log(timePassCalculator(new Date("07.02.2021")))

/*2. ZADATAK*/
let povrsinaKruga = 0
let opsegKruga = 0
let povrsinaPravokutnika = 0
let opsegPravokutnika = 0
let povrsinaTrokuta = 0
let opsegTrokuta = 0
let alfaKut = 0
let beatKut = 0

function shapesCalculator(){
    if(arguments.length === 1) {
        povrsinaKruga = Math.pow(arguments[0], 2) * Math.PI;
        opsegKruga = 2 * arguments[0] * Math.PI
        return "Povrina kruga: " + povrsinaKruga + "\nOpseg kruga: " + opsegKruga;
    }
    else if(arguments.length === 2) {
        povrsinaPravokutnika = arguments[0] * arguments[1]
        opsegPravokutnika = 2 * arguments[0] + 2 * arguments[1]
        return "Povrina kruga: " + povrsinaPravokutnika + "\nOpseg kruga: " + opsegPravokutnika;
    }
    else if(arguments.length === 3) {
        povrsinaTrokuta = (arguments[0] * arguments[1]) / 3
        opsegTrokuta = arguments[0] + arguments[1] + arguments[2]
        alfaKut = Math.asin(arguments[0] / arguments[2]) * 180/Math.PI
        beatKut = 180 - 90 - alfaKut
        return "Povrina kruga: " + povrsinaTrokuta 
        + "\nOpseg kruga: " + opsegTrokuta
        + "\nKut alfa: " + alfaKut
        + "\nKut beat: " + beatKut;
    }
    // else if(arguments.length === 2)
}

console.log(shapesCalculator(6))
console.log(shapesCalculator(6, 6))
console.log(shapesCalculator(6, 8, 10))


/*3. ZADATAK*/
const todoApp = document.querySelector("main")
const inputField = document.querySelector("input")
const todoList = document.querySelector(".todo-list")
const tableNode = document.querySelector("table")
let image = 0
console.log(todoApp)

todoApp.addEventListener("click", (event) => {
    // console.log("dsd",event.target.nodeName)
    if(event.target.className === "submit-button") {
        if(inputField.value.length === 0) {
            alert("Input field cant be empty")
        }
        else {
            const trNode = document.createElement("tr")
            const checkNode = document.createElement("img")
            checkNode.src="check.png"
            const tdNode = document.createElement("td")
            const textNode = document.createTextNode(inputField.value)
            const spanNode = document.createElement("span")
            const spanNodeText = document.createTextNode("X")
            trNode.appendChild(checkNode)
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)
            spanNode.appendChild(spanNodeText)
            trNode.appendChild(spanNode)
            tableNode.appendChild(trNode)
            

            const checkAtt = document.createAttribute("class")
            checkAtt.value = "checkbox-hidden"
            checkNode.setAttributeNode(checkAtt)
        }
    }

    if(event.target.nodeName === "TR") {
        checkItem(event, image)
    }

    if(event.target.nodeName === "SPAN") {
        popUp(event)
    }
})

const checkItem = (event) => {
    console.log(event.target.childNodes[0])
    console.log(event.target.parentElement)
    event.target.childNodes[1].classList.toggle("strike-through")
    event.target.childNodes[0].classList.toggle("checkbox-hidden")
}

const popUp = (event) => {
    let text = "";
    if(confirm("Are you sure?")) {
        const todo = event.target.parentElement
        todo.parentElement.removeChild(todo)
    }
}

/*1. ZADATAK*/
let minutesMil = 1000 * 60
let hoursMil = minutesMil * 60
let daysMil = hoursMil * 24
let mounthsMil = daysMil * 31
let yearsMil = mounthsMil * 12

const timePassCalculator = (doomsday) =>  {

    let todaysDate = new Date()
    let time = Math.abs(todaysDate.getTime() - doomsday.getTime())
    let years = Math.floor(time / yearsMil)
    let mounths = Math.floor((time / mounthsMil) % 12)
    let days = Math.floor((time / daysMil) % 31)
    let hours = Math.floor((time / hoursMil) % 24)
    let minutes = Math.floor((time / daysMil) % 60)
    return "D: " + days + ", M: " + mounths + ", Y: " + years + " H: " + hours + ", MIN: " + minutes
}

console.log(timePassCalculator(new Date('04.01.1954.')));
console.log(timePassCalculator(new Date('06.29.2021.')));
console.log(timePassCalculator(new Date('07.07.2021.')));
console.log(timePassCalculator(new Date('01.12.2062.')));




