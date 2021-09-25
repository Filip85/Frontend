/*1. Zadatak*/
// let name1 = prompt("Please enter your name");
// let surname = prompt("Please enter your surname");

// function Name(name1, surname) {
//     this.name = name1;
//     this.surname = surname;
// } 

// let newName = new Name(name1, surname)

// Name.prototype.fullName = function() {
//     return newName.name + newName.surname;
// }

// console.log(newName.fullName());


/*2. Zadatak*/
// function Car (manufacturer, model, horsepower){
//     this.manufacturer = manufacturer,
//     this.model = model,
//     this.horsepower = horsepower
//     // this.getcarInfo = function() {
//     //     return `${this.manufacturer} - ${this.model} [${this.horsepower}]`;
//     // }
// }

// let confirmPopUp = true;
// let carObjs = [];

// while(confirmPopUp === true) {
//     let manufacturer = prompt("Please enter manufacturer");
//     let model = prompt("Please enter model");
//     let horsepower = prompt("Please enter horsepower");
//     carObjs.push(new Car(manufacturer, model, horsepower))

//     let res = window.confirm( "Would you like to go again?" );

//     if(res === true) {
//         confirmPopUp = true;
//         console.log("dsds", confirmPopUp)
//     }
//     else {
//         confirmPopUp = false
//     }
// }

// Car.prototype.getcarInfo = function() {
//     return `${this.manufacturer} - ${this.model} [${this.horsepower}]`
// };

// // for(let i = 0; i < carObjs.length; i++) {
// //     console.log(carObjs[i].getcarInfo())
// // }

// carObjs.forEach(obj => console.log(obj.getcarInfo()))


/*3. ZADATAK*/
// function Car (firstname, surname, age){
//     this.firstname = firstname,
//     this.surname = surname,
//     this.age = age
//     this.getPersonInfo = function() {
//         return `${this.firstname} - ${this.surname} [${this.age}]`;
//     }
// }

// let nameObjs = [];

// while(window.confirm( "Would you like to go again?" )) {
//     let firstname = prompt("Please enter name");
//     let surname = prompt("Please enter surname");
//     let age = prompt("Please enter age");
//     let c = new Car(firstname, surname, age)
//     // console.log(c.getPersonInfo())
//     nameObjs.push(c)
// }
// console.log(nameObjs);
// nameObjs.forEach(obj => {
//     if(obj.age > 18) {
//         console.log(obj.getPersonInfo())
//     }
// })

// nameObjs.map(obj => obj.age > 18 ? 
//     console.log(obj.getPersonInfo()) : "")


/*4. Zadatak*/
/*
Create a dice rolling app.

Steps:

Create in html one div where you will print the result and one button which will trigger the dice toss
Create an Dice objects with has a numberOfSides property
create a method "roll" on the Dice object (prototype)
create a function for printing the number
 */

// const dice = {
//     "numberOfSides" : 6,
//     roll : function() {
//         return Math.floor(Math.random() * dice["numberOfSides"]);
//     }
// }

// const divResult = document.querySelector(".js-result")
// divResult.innerHTML = dice.roll();

// function Dice (number){
//     this.numberOfSides = number,
//     this.roll = function () {
//         console.log(this);
//         return Math.floor(Math.random() * this.numberOfSides);
//     }
// }

// const divResult = document.querySelector(".js-result")
// const b = document.querySelector("button")

// b.addEventListener("click", () => {
//     let num = Math.floor(Math.random() * 100)
//     let dice = new Dice(num);
//     divResult.innerHTML = dice.roll();
// })


let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this);
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};


let run = runner.run.bind(flyer, 20);
run();


