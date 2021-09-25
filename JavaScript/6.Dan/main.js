let number = prompt('Enter number from 1 to 3: ', '');
let a_v = 0;
let v = 0;
let r = 0;
let result = 0

const cube = () => {
    a_v = prompt('Enter edge ', '');
    let V = Math.pow(a_v, 3);
    let S = 6 * Math.pow(a_v, 2);
    return [V, S]
}

const cylinder = () => {
    a_v = prompt('Enter edge ', '');
    let V = (4 / 4) * a_v * 3 * Math.PI;
    let S = 4 * a_v * 2 * Math.PI;
    return [V, S]
}

const sphere = () => {
    r = prompt('Enter radius ', '');
    a_v = prompt('Enter height ', '');
    let V = r * 2 * Math.PI * a_v;
    let S = 2 * r * Math.PI * (r * a_v)
    return [V, S]
}

console.log(number)
const geometricBodies = (number) => {

    //1. Nacin
    if (number == 1) {
        result = cube();
        return result
    }
    else if (number == 2) {
        result = cylinder();
        return result
    }
    else if (number == 3) {
        result = sphere();
        return result
    }
    //"2. Nacin"
    // switch (parseInt(number)) {
    //     case "1":
    //         result = cube();
    //         return result
    //     case 2:
    //         result = cylinder();
    //         return result
    //     case 3:
    //         result = sphere();
    //         return result
    //     default:
    //         return "Wrong number";
    // }
}

console.log(geometricBodies(number))
/*
cheet sheet:
    cube: V=a3, S=6a2
    sphere: V=(4/3)r3π, S=4r2π;
    cylinder: V=r2πv, S=2rπ(r + v)
*/


/*4. Zadatak*/

// const grammer = (word) => {
//     return word.charAt(0) === word.charAt(0).toUpperCase() 
//             && word.charAt(word.length - 1) === "."
// }

const grammer = (word) => {
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90
        && word.charCodeAt(word.length - 1) === 46
}

console.log(grammer("Bok ja sam Filip."));


/*5. zadatak*/
let clock = document.querySelector("div")
setInterval(function tick() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(hours <= 12) {
        time("AM", hours, minutes, seconds)
    }
    else {
        time("PM", hours, minutes, seconds)
    }

}, 1000)

const time = (am_pm, hours, minutes, seconds) => {
    clock.innerHTML = ((hours%12 < 10) ? "0" + hours%12 : hours%12) + 
    ":" + ((minutes < 10) ? "0" + minutes : minutes) + 
    ":" + ((seconds < 10) ? "0" + seconds : seconds) +
    am_pm
}
