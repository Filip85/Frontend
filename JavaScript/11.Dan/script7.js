let set = new Set();
let numbers;
let number;
let j = 0;

function sortNumbers(a, b) {
    return a - b;
}

function HowLuckyIAm() {
    for(let i = 0; i < 5; i++) {
        set.add(Math.floor(Math.random() * 50) + 1);
    }

    for(let i = 0; i < 2; i++) {
        set.add(Math.floor(Math.random() * 10) + 1);
    }

    return set;
}


console.log(HowLuckyIAm())