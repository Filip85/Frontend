document.body.addEventListener("keydown", (event) => {
    if(event.key === "d") {
        return;
    }
    else {
        console.log("KEYDOWN: " + event.key);
    }
})

document.body.addEventListener("keyup", (event) => {
    if(event.key === "d") {
        return;
    }
    else {
        console.log("KEYUP: " + event.key);
    }

    if(event.key === "Escape") {
        console.clear();
    }
})