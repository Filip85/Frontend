const burger = document.querySelector(".burger");
const navList = document.querySelector(".primary-navigation-list")

burger.addEventListener("click", (event) => {
    navList.classList.toggle("show-nav-list");
})