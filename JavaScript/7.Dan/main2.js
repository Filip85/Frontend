const fruitListArray = [
    { name: "Apple", quantity: 459 },
    { name: "Banana", quantity: 312 },
    { name: "Orange", quantity: 650 },
    { name: "Mango", quantity: 123 },
    { name: "Grapes", quantity: 412 },
    { name: "Blueberries", quantity: 1905 },
];

const fruitList = document.querySelector(".js-fruit-list");

const showFruits = (fruitListArray) => {
    // let rendered = ""

    let newFruitListArray = fruitListArray.map((fruit) => 
        `<p>${fruit.name} - ${fruit.name}`
        )

    console.log(newFruitListArray)
    fruitList.innerHTML = newFruitListArray.join("");

    // let newFruitListArray = fruitListArray.forEach((fruit) =>
    //     rendered += `<p>${fruit.name} - ${fruit.name}`
    // )
    // console.log(newFruitListArray)
    // fruitList.innerHTML = rendered;
}

const filterFruits = () => {
    const inputSearch = document.querySelector("#fruitInput")
    inputSearch.addEventListener("keyup", (event) => {
        let newArray = fruitListArray.filter((fruit) => 
        console.log(fruit.name.includes(event.target.value))
    )
    })

    showFruits(newArray);
}

// filterFruits()
showFruits(fruitListArray);
filterFruits()