function truncateString(str, n) {
    return str.slice(0, n)
}

function truncateString2(str, n) {
    return str.substring(0, n)
}

console.log(truncateString("When I grow up I would like to work as a Frontend developer", 6))
console.log(truncateString2("When I grow up I would like to work as a Frontend developer", 9))

function f(email) {
    let monkey = email.indexOf("a", 13)
    console.log(monkey)
    let str = email.slice(0, monkey)
    console.log(monkey)
    var half = str.slice(str.length / 2, monkey)
    console.log(half)
    return monkey
    return email.replace(half, "...")
}

function godine(date) {
    let todaysDate = new Date()
    let y = todaysDate.getMonth()
    let y2 = date.getMonth()
    return "Dani: " + (todaysDate.getDate() - date.getDate()) 
    + ", Mjeseci: " + (Math.abs((todaysDate.getMonth() + 1) - (date.getMonth() + 1)) + 1)
    + ", Godine: " + (todaysDate.getFullYear() - date.getFullYear())
}

console.log(godine(new Date(2021, 7, 7)))

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
//console.log(calculate_age(new Date(1982, 11, 4)));


function dodavanje(nesto) {
    let date = new Date()
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()
    let array = [d, m, y]
    return array.join(nesto)
}

console.log(dodavanje("/"))
console.log(dodavanje("-"))
//console.log(f("robin_saherbatskyh@gmail.com"))

function short_Days(date) {
    let obj = {
      0: "NED",
      1: "PON",
      2: "UTO",
      3: "SRI",
      4: "CET",
      5: "PET",
      6: "SUB",
    };
  
    let day = date.getDay();
  
    return obj[day];
  
    /*for (const key in obj) {
      if (day.toString() === key) {
        return obj[key];
      }
    }*/
  }
  console.log(short_Days(new Date()));
  console.log(short_Days(new Date(2015, 10, 1)));


const heapSort = (word) => {
    let array = word.split("")
    let output = []

    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    const generate = (k, newArray) => {
        console.log(k, "nutra")
        if(k === 1){
            output.push(newArray.slice())
            console.log(k)
            return;
        }
        //console.log(k)
        generate(k - 1, newArray)
        console.log(k)

        for(let i = 0; i < k - 1; i++) {
            console.log(k, newArray[i], newArray[k - 1])
            swap(newArray, 0, k - 1)
            /*if(k%2 === 0) {
                console.log(k, newArray[i], newArray[k - 1])
                swap(newArray, i, k - 1)
            }
            else {
                console.log(k, newArray[i], newArray[k - 1])
                swap(newArray, 0, k - 1)
            }*/
            console.log("dsd")
            generate(k - 1, newArray)
        }
    }
    console.log(array.length, "vani")
    generate(array.length, array.slice())

    return output
}




console.log(heapSort("abc"))

var arr = [ 5, 12, 11, 13, 4, 6, 7 ];
console.log(Math.floor(arr.length / 2 - 1))



//heap sort v2

function heapsort(array, n) {

    let ar = array.slice("")
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        console.log(array)
        heapify(ar, n, i)
        
    }

    for(let i = n - 1; i > 0; i--){
        var swap = ar[0];
        ar[0] = ar[i];
        ar[i] = swap;
        console.log(ar)
        heapify(ar, i, 0)
    }

    //console.log(array)
}

function heapify(array, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if(l < n && array[l] > array[largest]) {
        largest = l
    }
    if(r < n && array[r] > array[largest]) {
        largest = r
    }
    if(largest != i) {
        var swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        heapify(array, n, largest)
    }
}

console.log(heapsort("abc", 3))


  

