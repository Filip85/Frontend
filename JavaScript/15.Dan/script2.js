let button = document.querySelector(".js-button");
let a = document.querySelector(".js-text");

button.addEventListener("click", async () => {
    let text = a.value;
    console.log(text)
    // const res = await fetch("https://api.funtranslations.com/translate/yoda.json", 
    //     {
    //         method: "POST",
    //         body: JSON.stringify({text: text}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //     }
    // });
    const res = await fetch("https://api.funtranslations.com/translate/yoda.json?text=" + text, 
        {
            method: "GET"
        });   
    
    const data = await res.json();
    console.log(data);
})


//https://api.funtranslations.com/translate/yoda.json