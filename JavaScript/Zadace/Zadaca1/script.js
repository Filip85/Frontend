/*Zadatak 1*/

const array = [1, 2, 3, "Bootcamp", [1, 2, 3]]

console.log(array.length)

/*Zadatak 2*/ 

const object = {
    p1: "html",
    p2: 44,
    p3: [1, 2, 3]
}

console.log(object)

object.p4 = {
    a: 1,
    b: 2,
    c: 3
}

console.log(object)

/*Zadatak 3*/

map = new Map()

map.set('Countires', {c1: "France", c2: "Germany"})
map.set(function(){}, "funkcija")

console.log(map)

let key = 2
map.set(key, 3);

console.log(map)

var map;

/*Zadatak 4*/

let array14 = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

let set14 = new Set(array14)

console.log(set14)

console.log(...new Set(array14))

/*Zadatak 5*/

/*assignment*/
let x = 2;
x = 4;
console.log(x)

/*compariosn*/
console.log(2 > 3)

/*arithemtic*/
let y = 7;
let z = -y
console.log(z)

/*logical*/
let log_and = "string" && 2
console.log(log_and)

let log_or = "string" || 2
console.log(log_or)

/*conditional*/
let rez = (y > 7) ? 'vece je' : 'manje je'
console.log(rez)



