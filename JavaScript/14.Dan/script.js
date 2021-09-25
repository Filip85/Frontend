const chekAuth = () => {
    console.log("Fetching user...");
}

const fetchUser = new Promise(resolve => {
    setTimeout(resolve, 2000, "Checking Auth");
});

const printS = new Promise(resolve => {
    setTimeout(resolve, 2000, "Lara");
});

// function fetchUser() {
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//             res("true")
//         }, 2000)
//     })
// }

// function printS() {
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//             res("Lara");
//         }, 2000)
//     })
// }

async function LukaModric() {
    chekAuth();
    let a = await fetchUser;
    console.log(a);
    chekAuth();
    let lara = await printS;
    console.log(lara);

    // chekAuth();
    // let a = await fetchUser();
    // if(a) {
    //     let n = await printS()
    //     console.log(n);
    // }
}

LukaModric();