// const buttonList2 = document.querySelectorAll(".button-list2")
// const buttonList = document.querySelector(".button-list")
// buttonList2.forEach(button => {
//     button.style.color = "white"
//     button.style.backgroundColor = "red"
// })

// buttonList.addEventListener("click", (event) => {
//     console.log(event.target.innerText)
// })

// let buttons = document.querySelector("div")
// buttons.forEach(button => {
//     button.addEventListener("click",  (event) => {
//         console.log(event.target.innerText)
//     })
// })

// buttons.addEventListener("click", (event) => {
//     console.log(event.target.innerText)
// })


const list = document.querySelector("ul")
console.log(list)

list.addEventListener("click", (event) => {
    console.log(event)
    if(event.target.className == "button-delete") {
        console.log(event.target)
        let listeElement = event.target.parentElement
        console.log(listeElement)
        listeElement.parentElement.removeChild(listeElement)
    }
    else if(event.target.className === "heading") {
        console.log("Heading 1")
    }
})



