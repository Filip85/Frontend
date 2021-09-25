/*1. Zadatak*/
// function Person(firstname, surname, dish) {
//     this.firstname = firstname,
//     this.surname = surname,
//     this.dish = dish,
//     this.getInfo = function() {
//         return `I am ${this.firstname} ${this.surname}, and my favourite dish is ${this.dish}`
//     }
// }

// let numOfDishes = [];
// let counter = 0;
// while(window.confirm("AGAIN!!!!!")) {
//     let firstname = prompt("Please enter your name");
//     let surname = prompt("Please enter your surname");
//     let dish = prompt("Please enter your favourite dish");

//     numOfDishes.push(new Person(firstname, surname, dish));
// }


// let dish = prompt("Please enter dish you want to count");
// const sumDish = (dish) => {
//     numOfDishes.forEach(person => {
//         if(person.dish.toLowerCase() === dish.toLowerCase()) {
//             counter++
//         }
//     })

//     return `${dish} is favourite dish of ${counter} people`;
// }

// numOfDishes.forEach(person => {
//     console.log(person.getInfo());
// })

// console.log(sumDish(dish))


/*2. Zadatak*/
// function Band(bandname, year) {
//     this.bandname = bandname,
//     this.year = year,
//     this.wasPopularInEighties = function() {
//         return (this.year / 10 === 1980 / 10) ? this.bandname : "";
//     }
// }

// let numOfBands = [];
// let counter = 0;
// while(window.confirm("AGAIN!!!!!")) {
//     let bandname = prompt("Please enter band name");
//     let year = prompt("Please enter year");

//     numOfBands.push(new Band(bandname, year));
// }

// numOfBands.forEach(band => {
//     console.log(band.wasPopularInEighties());
// })


// let sortedBands = numOfBands.sort(function(a, b) {
//     return b.year - a.year;
// })

// console.log(sortedBands.map(band => band.bandname));

// // ban.forEach(band => {
// //     console.log(band.bandname);
// // })


/*3. Zadatak*/
// const tableElement = document.querySelector(".js-table")
// const rowInput = document.querySelector("#row");
// const cellInput = document.querySelector("#cell");
// const buttonCreate = document.querySelector(".js-create");
// const buttonDelete = document.querySelector(".js-remove");
// const buttonAdd = document.querySelector(".js-add");
// let stringTable = ""
// let td;
// let tr;
// buttonCreate.addEventListener("click", () =>{
//     for (let i = 0; i < rowInput.value; i++) {
//         tr = document.createElement("tr");
//         for(let j = 0; j < cellInput.value; j++) {
//             td = document.createElement("td");
//             td.innerHTML = "Bok";
//             tr.append(td);
//         }
//         tr.append(td);
//         tableElement.append(tr);
//     }
//     // for(let i = 0; i < rowInput.value; i++) {
//     //     stringTable += "<tr>";
//     //     for(let j = 0; j < cellInput.value; j++) {
//     //         stringTable += "<td>" + "Bok" + "</td>";
//     //     }
//     //     stringTable += "</tr>";
//     // }

//     // tableElement.innerHTML = stringTable;
//     // console.log(stringTable)
// })


// buttonDelete.addEventListener("click", () => {
//     let trElement = document.querySelector("tr");
//     trElement.remove();
// })

// buttonAdd.addEventListener("click", () => {
//     tr = document.createElement("tr");
//     for(let j = 0; j < cellInput.value; j++) {
//         td = document.createElement("td");
//         td.innerHTML = "Bok";
//         tr.append(td);
//     }
//     tr.append(td);
//     tableElement.append(tr);
// })

// console.log(stringTable)

/*4.Zadatak*/
// let library = [
//     { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', libraryID: 1254},
//     { author: 'Antun Gustav Matoš', title: 'Tired Tale', libraryID: 4264},
//     { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', libraryID: 3245}
// ];


// let sortedLibrary = library.sort(function(a, b){
//     if(a.title < b.title) { return -1; }
//     if(a.title > b.title) { return 1; }
//     return 0;
// })

// console.log("Sorted library array: ", sortedLibrary);

// let firstname = prompt("Please enter author");
// let titleB = prompt("Please enter title");
// let id = prompt("Please enter libraryID");

// const addNewBook = () => {
//     library.push({author: firstname, title : titleB, libraryID : id})
// }

// addNewBook()
// console.log(library)

// function library = [
//     { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', libraryID: 1254},
//     { author: 'Antun Gustav Matoš', title: 'Tired Tale', libraryID: 4264},
//     { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', libraryID: 3245}
// ];


// function Library(author, title, libraryID) {
//     this.author = author,
//     this.title = title,
//     this.libraryID = libraryID
// }

// let libraryArray = [];
// libraryArray.push(new Library('Marija Jurić Zagorka', 'The Wich Of Grich', 1254), 
//                 new Library('Antun Gustav Matoš', 'Tired Tale', 4264), 
//                 new Library('Mousy Blacksmith', 'Blacksmith Of His Own Luck', 3245));

// let sortedLibrary = libraryArray.sort(function(a, b){
//     if(a.title < b.title) { return -1; }
//     if(a.title > b.title) { return 1; }
//     return 0;
// })

// console.log("Sorted library array: ", sortedLibrary);

// let firstname = prompt("Please enter author");
// let titleB = prompt("Please enter title");
// let id = prompt("Please enter libraryID");

// const addNewBook = () => {
//     libraryArray.push(new Library(firstname, titleB, id));
// }

// addNewBook();

// Library.prototype.getbookInfo = function () {
//     return `${this.author} - ${this.title} - ${this.libraryID}`
// }

// libraryArray.forEach(book => {
//     console.log(book.getbookInfo())
// })

/*5. Zadatak*/

// let array1 = [10, 22, 32, 61, 2312313, 205];
// let array2 = [32, 30, 1, 61, 205, 102];
// let set;
// let newArray = array1.concat(array2);

// set = new Set(newArray);

// console.log(...set)

// let duplicates = array1.filter(element => array2.includes(element))
// console.log(duplicates)

/*6. Zadatak*/
// let library = [
//     { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', borrowed: true},
//     { author: 'Antun Gustav Matoš', title: 'Tired Tale', borrowed: false},
//     { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', borrowed: false}
//     ];

// const bookList = document.querySelector(".js-book-list");

// const ulElement = document.createElement("UL")
// for(index in library) {
//     let liElement = document.createElement("LI");


//     liElement.innerHTML = `${library[index].author} - ${library[index].title} - ${library[index].borrowed}`

//     if(library[index].borrowed) {
//         liElement.classList.add("borrowed")
//     }
//     else {
//         liElement.classList.add("notBorrowed")
//     }

//     ulElement.append(liElement);
// }

// bookList.append(ulElement);

/*7. Zadatak*/
// var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

// let sentence = "Moje ime je ? Filip.";

// let stringArray = sentence.split(" ");

// console.log(stringArray)

// let newStringArray = stringArray.filter(word => !separators.includes(word))

// let counter = 0;
// newStringArray.forEach(word => {
//     counter++;
// })

// console.log(counter)

/*8. zadatak*/

// let howLuckyIAm = [];

// let randNumber = 0
// const generator = () => {
//     randNumber = Math.floor(Math.random() * 3) + 1
//     howLuckyIAm.push(randNumber,
//     Math.floor(Math.random() * 2 + 1),
//     Math.floor(Math.random() * 2 + 1))
// }

// generator()

// console.log(howLuckyIAm)
// console.log(howLuckyIAm.every(num => num === randNumber));

// let howLuckyIAm = new Set();
// let randNumber = 0

// do {

// } while(howLuckyIAm.size !== 1)


/*9. zadatak*/
let getBudgets = [
    {name:"John",age:21,budget:23000},
    {name:"Steve",age:32,budget:40000},
    {name:"Martin",age:16,budget:2700}
]

const salaryButtons = document.querySelector(".js-salary-buttons");

const sumOfBudgets = () => {
    let sumArray = getBudgets.reduce(((accumulator, currentValue) => 
        accumulator + currentValue.budget), 0);

    return sumArray;
}

console.log(sumOfBudgets())

salaryButtons.addEventListener("click", (event) => {
    if(event.target.className === "js-raise-salary") {
        console.log("dsds")
        getBudgets.forEach(person => person.budget += person.budget * 0.1);
    }
    else {
        getBudgets.forEach(person => person.budget -= person.budget * 0.1)
    }

    console.log(getBudgets)
})

console.log(getBudgets)



