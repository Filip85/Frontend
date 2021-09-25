const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
    { name: "Zerod", value: 37 },

];

let array = [];

const renderProducts = (items) => {
    const container = document.querySelector(".list");
    const source = document.querySelector("#templateHandlebars").innerHTML;
    const template = Handlebars.compile(source);
    container.innerHTML = template({ items });
};

renderProducts(items);

const list = document.querySelector(".list");
const selectAZ = document.querySelector("#name");
const selectValue = document.querySelector("#value");
const input = document.querySelector("input");

const deleteItem = (event) => {
    const deleteButton = event.target.closest(".js-delete");

    if (deleteButton) {
        deleteButton.parentElement.remove();
    }
}

const sortByName = (event) => {

    if (event.target.value === "A-Z") {
        items.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        renderProducts(items)
    }
    else {
        items.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }

            return 0;
        });

        renderProducts(items)
    }
}

const sortByValue = (event) => {
    if (event.target.value === "Ascending") {
        items.sort(function (a, b) {
            var valueA = a.value;
            var valueB = b.value;
            if (valueA > valueB) {
                return -1;
            }
            if (valueA < valueB) {
                return 1;
            }

            return 0;
        });

        renderProducts(items)
    }
    else {
        items.sort(function (a, b) {
            var valueA = a.value;
            var valueB = b.value;
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }

            return 0;
        });

        renderProducts(items)
    }
}

const findPerson = (event) => {
    let array = []
    items.forEach(item => {
        if (item.name.toLowerCase().startsWith(event.target.value.toLowerCase())) {
            array.push(
                { name: item.name, value: item.value },
            )
        }
    })

    renderProducts(array)
}


selectAZ.addEventListener("change", sortByName);
selectValue.addEventListener("change", sortByValue)
list.addEventListener("click", deleteItem);
input.addEventListener("keyup", findPerson)
