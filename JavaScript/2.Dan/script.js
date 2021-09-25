/*Zadatak1-block*/

console.log("Zadatak1-block");
let x = 1;
let y = 2;
let z = 90;

if(true) {
    let x = 10;
    let y = 20;
    console.log(x)
    console.log(y)
    z = 100
}

console.log(x)
console.log(y)
console.log(z)

var x2 = 1;
var y2 = 2;

if(true) {
    var x2 = 10;
    var y2 = 20;
}

console.log(x2)
console.log(y2)

/*Zadatak2-break*/

console.log("Zadatak2-break");
let i = 0;

while(i < 5) {
    if(i === 3){
        break
    }

    i++;
}

console.log(i);

/*Zadatak3-break*/

let xCar = "";

function newCar(car) {
    switch (car) {
        case 'BMW':
            xCar = car;
        case 'Audi':
            xCar = car;
        case 'Mercedes':
            xCar = car;
    }
}

console.log(newCar("BMW"), "Moj novi auto je " + xCar);
console.log(newCar("Audi"), "Moj novi auto je " + xCar);
console.log(newCar("Mercedes"), "Moj novi auto je " + xCar);

function newCar1(car) {
    switch (car) {
        case 'BMW':
            return car;
        case 'Audi':
            return car;
        case 'Mercedes':
            return car;
        default:
            console.log("nothing");
            break;
    }
}

console.log(newCar("BMW"), "Moj novi auto je ", newCar("BMW"));
console.log(newCar("Audi"), "Moj novi auto je ");
console.log(newCar("Mercedes"), "Moj novi auto je ");
console.log(newCar("Opel"), "Moj novi auto je ");

/*Zadatak4-arrow functions*/

const obj = {
    a1: 10
}

var add = function (a, b, c) {
    return this.a1 + a + b + c;
  }

  console.log(add)

  var result = add.call(obj, 1, 2, 3)
  console.log(result)


  function addNumber(a, b) {
      return this.a1 + a + b;
  }

  var t = addNumber.call(obj, 3, 4)
  console.log(t)


  function Product(name, price) {
      this.name = name;
      this.price = price
  }

  function Food(name, price) {
      Product(this, name, price)
      console.log(this)
      this.category = "food"
  }

  console.log(new Food('cheese', 5).name)


  let f = function(num, str) {
      console.log(num, str, this)
      return true
  }

  let object1 = {
      name: "Filip",
      age: 20,
      myMethod: function(fn) {
          //fn(2, "Filip")
      }
  }

  f.call(object1, 2, "Filip")

  