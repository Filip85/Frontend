/*1. ZADATAK*/
const getNumberOfFloor = (floor) => {
    if(floor <= 0) {
        return floor;
    }
    else if(floor === 13) {
        return "Wrong floor"
    }
    else if(floor > 13) {
        return floor - 2;
    }
    else {
        return floor - 1;
    }
}

console.log(getNumberOfFloor(12));


/*2. ZADATAK*/
const getLitres = (time) => {
    return Math.floor(time * 0.5)
}

console.log(getLitres(3))
console.log(getLitres(6.7))
console.log(getLitres(11.8))


/*3. ZADATAK*/
const getCentury = (year) => {
    // let number = year / 100
    // if(Number.isInteger(number)) {
    //     return number;
    // }
    // else {
    //     return Math.floor(number) + 1;
    // }

    return Math.ceil(year / 100);
}

console.log(getCentury(1705))
console.log(getCentury(1900))
console.log(getCentury(1601))
console.log(getCentury(2000))
