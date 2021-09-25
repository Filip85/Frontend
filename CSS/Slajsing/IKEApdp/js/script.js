console.log("dsds")

document.addEventListener("DOMContentLoaded", function () {
    init();
});

const productInformation = document.querySelector(".js-product-information");
const putInCart = document.querySelector(".aside");
const popup = document.querySelector(".js-popup");
const overlay = document.querySelector(".overlay");
const popUps = document.querySelectorAll(".js-popup");
const productPackage = document.querySelector(".product__packaging");
const next = document.querySelector(".js-next");
const prev = document.querySelector(".js-prev");


const init = () => {
    console.log(document.querySelector('.card-wrapper--big'))

    bindEventListeners();
}

const bindEventListeners = () => {
    console.log(productInformation)
    productInformation.addEventListener("click", showHidePopup);
    putInCart.addEventListener("click", showHidePopup);
    overlay.addEventListener("click", hidePopUp)
    next.addEventListener("click", nextProduct)
    prev.addEventListener("click", prevProduct)
}

const showHidePopup = (event) => {
    const openPopUpButton = event.target.closest(".js-popupButton");
    const closePopUpButton = event.target.closest(".popup__X");
    const productInfoButton = event.target.closest(".product__information-button");

    if (openPopUpButton && openPopUpButton === productInformation.querySelectorAll("button")[0] || openPopUpButton === productInformation.querySelectorAll("button")[1] || openPopUpButton === productInformation.querySelectorAll("button")[2]) {
        popUps[1].classList.toggle("active");
        overlay.style.display = "block";
    }
    else if(openPopUpButton) {
        popUps[0].classList.toggle("active");
        overlay.style.display = "block";
    }
    else if(closePopUpButton && closePopUpButton === popUps[1].querySelector(".popup__X")) {
        popUps[1].classList.toggle("active");
        overlay.style.display = "none";
    }
    else if(closePopUpButton && closePopUpButton === popUps[0].querySelector(".popup__X")) {
        popUps[0].classList.toggle("active");
        overlay.style.display = "none";
    }
    else if(productInfoButton && productInfoButton === popUps[1].querySelectorAll("button")[3]) {
        productPackage.classList.toggle("hidden-information");
    }
}

const hidePopUp = () => {
    console.log("overlay")
    if(!popUps[0].classList.contains("active")) {
        popUps[0].classList.toggle("active");
        overlay.style.display = "none";
    }
    else if(!popUps[1].classList.contains("active")) {
        popUps[1].classList.toggle("active");
        overlay.style.display = "none";
    }
}

const nextProduct = () => {
    document.querySelector(".js-goodWith").scrollLeft += 70;
}

const prevProduct = () => {
    document.querySelector(".js-goodWith").scrollLeft -= 70;
}