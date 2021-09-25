const playground = document.querySelector(".playground")
const images = document.querySelectorAll(".playground-side2 img")
const resultHeader = document.querySelector(".result")
const target = document.querySelector(".info-part")
const resetButton = document.querySelector("button")
const titlePart = document.querySelector("title-part")
let image = 0
console.log(target)


const playGame = () => {
    const signsObj = {
        0: "rock",
        1: "paper",
        2: "scissors",
    }
    
    const resultObj = {
        00: "Tie",
        01: "Paper wins",
        02: "Rock wins",
        10: "Paper wins",
        11: "Tie",
        12: "Scissors wins",
        20: "Rock wins",
        21: "Scissors win",
        22: "Tie",
    }

    resetButton.disabled = true

    playground.addEventListener("click", (event) => {
        if(event.target.className === "image") {
            resetButton.disabled = false
            //console.log(event.target.alt)
            const sign = event.target.alt


            const randSign = randomSign()
            const result = sign + randSign
            
            //console.log(images[parseInt(randSign)].classList)
            image = images[sign]                                 //umjesto ovog cu napraviti funkciju
            images[parseInt(randSign)].classList.remove("image")
            images[parseInt(randSign)].classList.toggle("show-image")
            resultHeader.innerHTML = resultObj[parseInt(result)]
            //images.classList.add("show-image")
            putImgeInMiddle(images[sign])
        }
    })
       
    function randomSign() {
        const rand = Math.floor(Math.random() * Object.keys(signsObj).length)
        return String(rand)
    }

    function putImgeInMiddle(image) {
        image.classList.remove("put-image-in-middle")
        //console.log(image)
    }
}

playGame()


let options = {
    root: document,
    rootMargin: "150px",
    threshold: 0.25
};

const observer = new IntersectionObserver(function(entries, observer) {
    console.log("dsds", observer)
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            for (let i = 0; i < entry.target.children.length; i++) {
                if(i === 1) {
                    entry.target.children[i].classList.remove("article-visible")
                    entry.target.children[i].classList.add("second-article")
                }
                else {
                    entry.target.children[i].classList.remove("article-visible")
                    entry.target.children[i].classList.add("first-third-article")
                }
            }
            return;
        }

        for (let i = 0; i < entry.target.childNodes.length; i++) {
            if(i === 1) {
                entry.target.children[i].classList.remove("second-article")
                entry.target.children[i].classList.add("article-visible")
            }
            else {
                entry.target.children[i].classList.remove("first-third-article")
                entry.target.children[i].classList.add("article-visible")
            }
        }
    });
}, options)

observer.observe(target);
// observer.observe(titlePart);


const reset = () => {
    resetButton.addEventListener("click", function() {
        //console.log(image)
        image.classList.toggle("image")
        image.classList.toggle("show-image")
        //resetButton.disabled = true      
    })
}

reset()


