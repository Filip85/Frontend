/*1. ZADATAK*/
const colorSetting = document.querySelector("section");
const changeByInput = document.querySelector(".change-by")
const opacityInput = document.querySelector(".opacity")
const mixedColorDiv = document.querySelector(".mixed-color-div")
const rgbInfo = document.querySelector("span")
let red = 0;
let green = 0;
let blue = 0;
let color;
rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;

colorSetting.addEventListener("click", (event) => {
    console.log(event.target)
    if(opacityInput.value === "0") {
        mixedColorDiv.style.background = rgba(255, 255, 255, 0)
    }
    else {
        if (event.target.value === "red+") {
            console.log(changeByInput.value)
            color = red;
            red = red + parseInt(changeByInput.value)
            if (red > 255) {
                red = 255
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if (event.target.value === "green+") {
            console.log(changeByInput.value)
            green = green + parseInt(changeByInput.value)
            if (green > 255) {
                green = 255
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if (event.target.value === "blue+") {
            console.log(changeByInput.value)
            blue = blue + parseInt(changeByInput.value)
            if (blue > 255) {
                blue = 255
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if (event.target.value === "red-") {
            console.log(changeByInput.value)
            red = red - parseInt(changeByInput.value)
            if (red < 0) {
                red = 0
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if (event.target.value === "green-") {
            console.log(changeByInput.value)
            green = green - parseInt(changeByInput.value)
            if (green < 0) {
                green = 0
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if (event.target.value === "blue-") {
            console.log(changeByInput.value)
            blue = blue - parseInt(changeByInput.value)
            if (blue < 0) {
                blue = 0
            }
            rgbInfo.innerHTML = "R: " + red + ", G: " + green + ", B: " + blue;
            mixedColorDiv.style.background = rgba(red, green, blue, opacityInput.value)
        }
        if(event.target.className === "randomize-button") {
            randomColor()
        }
    }
})

function rgba(r, g, b, o) {
    return "rgb(" + r + "," + g + "," + b + "," + o + ")";
}


function randomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    rgbInfo.innerHTML = "R: " + r + ", G: " + g + ", B: " + b;

    mixedColorDiv.style.background = color;
}


// 2. ZADATAK

const compSide = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
};

let compS;
const DNAStrand = (dnaString) => {

    compS = ""
    for(letter of dnaString) {
        compS += compSide[letter] + "";
    }
    
    return compS;
}

console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));


// /*3. ZADATAK*/

let max = 0;
let min = 0;
const highAndLow = (stringNumber) => {
    let newArray = stringNumber.split(" ");
    max = Math.max(...newArray);
    min = Math.min(...newArray)
    return [max, min]; 
}


console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 -9 3 4 -5"));
console.log(highAndLow("1 -9 3 10 -5"));


/*4. ZADATAK*/
let numOfVowels = 0;
let numOfConsonants = 0;
const vowels = ["a", "e", "i", "o", "u"];
const putI = (word) => {
    
    for(let letter of word.toLowerCase()) {
        if(vowels.includes(letter)) {
            numOfVowels++;
        }
        else {
            numOfConsonants++;
        }
    }
    
    if(word.charAt(0) === "I" || numOfVowels >= numOfConsonants 
        || word.charAt(0) === word.charAt(0).toLowerCase()) {
            return "Invalid word"
        }
        else {
            word = "i" + word;
            return word
        }
}

let word = "Apple"
console.log(putI("Appple"))
console.log(putI("Bootcamp"))