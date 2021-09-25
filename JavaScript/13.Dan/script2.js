function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response)
    }

    xhr.send()
}

function displayFirstFiveTodos(json) {
    console.log(json.slice(0, 5))
}

function displayNameOfFirstTodo(json) {
    console.log(json[0].title)
}

loadAsset("https://jsonplaceholder.typicode.com/todos", 'json', displayFirstFiveTodos)
loadAsset("https://jsonplaceholder.typicode.com/todos", 'json', displayNameOfFirstTodo)
