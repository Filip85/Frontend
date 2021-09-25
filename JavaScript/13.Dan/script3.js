// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Good!!!");
//     } , 500)
// })

// promise.then(value => console.log(value))

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(function(data) {
  //   return data.json();
  // }).then(function(json) {
  //   let name = json.find(obj => obj.name.includes(input.value))
  //   let myUrl = `https://jsonplaceholder.typicode.com/posts?userId=${name.id}`;
  //   getUserPosts(myUrl)
  
  // }).catch(function(name) {
  //   console.log('Fetch problem: ' + name.message);
  // });

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
})

function getUserPosts(url) {
    fetch(url)
      .then(function(data) {
        return data.json();
      }).then(function(json) {
        
        const source = document.querySelector('#cardTemplate').innerHTML;
        const container = document.querySelector('.list');
        // compile the template
        const template = Handlebars.compile(source);
        const output = template({ data: json });

        container.innerHTML = output;
      }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
    }
