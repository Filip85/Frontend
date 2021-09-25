document.addEventListener("DOMContentLoaded", function () {
    init();
});

const init = () => {
    fetchProducts();
}

const conatiner = document.querySelector(".container");

const fetchProducts = () => {
    // postProducts().then(data => console.log(data))
    fetchAllProducts().then(data => renderTemplate(data))

    conatiner.addEventListener("click", doSomethingWithProducts);

}


const renderTemplate = (data) => {
    const source = document.querySelector("#productsTemplate").innerHTML;

    const cardWrapper = document.querySelector(".container");

    const template = Handlebars.compile(source);
    const output = template({ data });

    console.log(output)

    cardWrapper.innerHTML += output;
}


const doSomethingWithProducts = (event) => {
    const deleteButton = event.target.closest(".js-delete");
    const update = event.target.closest(".js-update");

    if (deleteButton) {
        remove(deleteButton.dataset.id);
    }
    else if(update) {
        updateProduct(update.dataset.id)
    }
}

const fetchAllProducts = () => {
    return fetch(`http://as-var-croapps.ecx.local:1337/products`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const postProducts = () => {
    console.log("ok")
    return fetch(`http://as-var-croapps.ecx.local:1337/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'lightweight baby',
            price: 10000000
        })
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

const remove = (id) => {
    fetch(`http://as-var-croapps.ecx.local:1337/products/` + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('removed');
    }).catch(err => {
        console.error(err)
    });
}

const updateProduct = (id) => {
    console.log(id)
    fetch(`http://as-var-croapps.ecx.local:1337/products/12`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name: 'hit me baby one more time',
        })
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}