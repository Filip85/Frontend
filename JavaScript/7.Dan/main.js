console.log("Exercise template 04");

// Filter array items based on search criteria.

const arrayFilter2 = [
  { name: "Apple", quantity: 459 },
  { name: "Banana", quantity: 312 },
  { name: "Orange", quantity: 650 },
  { name: "Mango", quantity: 123 },
  { name: "Grapes", quantity: 412 },
  { name: "Blueberries", quantity: 1905 },
];

renderFruitList(arrayFilter2);
bindListener();

function bindListener() {
  const fruitSearchInput = document.querySelector("#fruitSearch");
  fruitSearchInput.addEventListener("keyup", (event) => {
    const value = event.target.value;
    const newList = arrayFilter2.filter((fruit) =>
      fruit.name.toUpperCase().includes(value.toUpperCase())
    );

    renderFruitList(newList);
  });
}

function renderFruitList(arrayFilter2) {
  const fruitListElement = document.querySelector(".js-fruit-list");
  let rendered = "";
  // let test = "title"

  arrayFilter2.forEach((fruit) => {
    rendered += `<div>${fruit.name} - ${fruit.quantity}</div>`;
  });

  fruitListElement.innerHTML = rendered;
}

// Template literals
// `<div class="container">Example</div>`
// `<div>${customVariable}</div>`


// Find an object in an array by its name.

let arrayFind = [
	{ name: 'wood', quantity: 20 },
	{ name: 'paper', quantity: 40 },
	{ name: 'plastic', quantity: 5 }
];

const findName = (array) => array.name.startsWith("w") &&  array.quantity > 10
console.log(arrayFind.find(findName));


// Find index of a fruit "blueberries".

let arrayFindIndex = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
// expected output: 3

const findBlueberriesIndex = (element) => element === "cantaloupe"

console.log(arrayFindIndex.findIndex(findBlueberriesIndex))


// Show all images from the list on the page. Add button which on click hides random image (use visibility property).

let arrayForEach = [
	{ src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg', alt: 'image' },
	{ src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg', alt: 'image2' },
	{ src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg', alt: 'image3' }
];

const imageListElement = document.querySelector(".js-image-list");
const showImages = (arrayForEach) => {
    let imageElement = ""
    arrayForEach.forEach(obj => {
        console.log(obj);
        imageElement += `<img src="${obj.src}" alt="${obj.alt}"><br>`;
    })

    imageListElement.innerHTML = imageElement;
}

const buttonHide = document.querySelector(".js-button-hidde");

buttonHide.addEventListener("click", (event) => {
    const images = document.querySelectorAll("img");
    let index = Math.floor(Math.random()*images.length);
    console.log("index", index)

    images.forEach((img, i) => {
		if(i === index) {
            images[i].style.visibility = "hidden";
		}
        else {
            img.style.visibility = "visible";
        }
	})
})

showImages(arrayForEach)

// Map an array of numbers to an array of power 3 exponents.

let arrayMap = [2, 4, 5, 7, 9];

console.log(arrayMap.map(x => Math.pow(x, 3)))
// expected output: [8, 64, 125, 343, 729]

// Sum all even numbers.

const array1 = [5, 4, 66, 12, 33, 45, 90]

const reducre = function (accumulator, currentValue) {
    if(currentValue % 2 === 0) {
        return accumulator + currentValue
    } 
    return accumulator;
}

console.log(array1.reduce(reducre))


// Extract the last two elements in the sequence.

let arraySlice = ['one', 'two', 'three', 'four', 'five', 'six'];
// expected output: ["five", "six"]

console.log(arraySlice.slice(-2))


let arraySort = [
	{ name: 'Zagreb', postalCode: 10000, type: 1 },
	{ name: 'Varazdin', postalCode: 42000, type: 2 },
	{ name: 'Split', postalCode: 21000, type: 2 },
	{ name: 'Rijeka', postalCode: 51000, type: 3 },
	{ name: 'Osijek', postalCode: 31000 },
	{ name: 'Zadar', postalCode: 23000 }
];

// console.log(arraySort.sort((a, b) => (a.name > b.name) ? 1 : -1))

console.log(arraySort.sort((a, b) => {
    console.log(a.postalCode, b.postalCode, a.postalCode - b.postalCode)
    return a.postalCode - b.postalCode;
}))


// Sort array of objects by postalCode, descending

console.log(arraySort.sort((a, b) => {
	console.log(b.postalCode, a.postalCode)
    return b.postalCode - a.postalCode;
}))


/*Driving age*/

let age = [20, 25, 18, 10, 50];

let result = age.every(x => x >= 18);

console.log(result)