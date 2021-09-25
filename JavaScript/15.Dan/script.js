const p = document.querySelector(".activity");
const button = document.querySelector("button");

function showActivity(activity) {
    console.log(activity.type);
    p.innerHTML = activity.activity;
    p.setAttribute("class", activity.type);
    let color = getComputedStyle(p);

    button.setAttribute("style", `background-color: ${color.color}`);
}


button.addEventListener("click", async() => {
    await fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => showActivity(data))
})

// let f = await fetch("https://www.boredapi.com/api/activity/");
// console.log(f)
// let p = await f.json();
// console.log(p)

// “education”, 
// “recreational”, 
// “social”, 
// “diy”, 
// “charity”, 
// “cooking”, 
// “relaxation”, 
// “music”, 
// “busywork”.

