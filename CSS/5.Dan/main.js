const cookie = document.querySelector(".cookie-monster");
const acceptButton = document.querySelector(".cookie-accept");

cookie.addEventListener("click", (event) => {
    if(event.target.className = "cookie-accept") {
        event.target.parentNode.parentNode.parentNode.remove("cookie-monster")
        // cookie.classList.add("cookie-disabled");
    }
})
