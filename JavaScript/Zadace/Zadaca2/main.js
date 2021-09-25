/*Zadatak 1*/

function convertLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(convertLetter("bootcamp"))

/*Zadatak 2*/
function logCharacter(word) {
    for (let index = 0; index < word.length; index++) {
        console.log(word[index])
        //console.log(word.charAt(index))
    }
}

logCharacter("Bootcamp")

/*Zadatak 3*/

let newName = " "
function age_name(name, age) {
    if(age % 2 !== 0 && age < 100 && name.length < 10) {
        for (let index = name.length - 1; index >= 0; index--) {
            newName += name[index]
        }
        return newName;
    }
    else if(age % 2 === 0 && age < 100 && name.length < 10){
        return name + " " + age;
    }
    else if(age > 100 || name.length > 10){
        return name
    }
}

console.log(age_name("Johnnnnnnnn", 121))


/*Zadatak 4*/

let i = 0

do {
    var newPara = document.createElement("p");
    var text = document.createTextNode(i);
    newPara.appendChild(text)
    document.getElementById("parent-element").appendChild(newPara)

    i++;
    console.log(newPara)
} while (i < 10)