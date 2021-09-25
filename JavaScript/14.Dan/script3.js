function getEvolution(evolutions) {
    // let evos = evolutions.chain.evolves_to.map(evolutions => evolutions)
    // console.log("fdf", evolutions)

    // evos.forEach(element => {
    //     console.log(element.species.name)
    // });


    if(evolutions.lenght === 0) {
        return;
    }

    console.log(evolutions[0].species.name);
    getEvolution(evolutions[0].evolves_to);
}

async function fetchEvolution() {
    let random = Math.floor(Math.random() * 898);
    let url = `https://pokeapi.co/api/v2/pokemon/${random}`;

    try {
        let fetch1 = await fetch(url)
            .then(response => response.json())
            .then(pokemon => pokemon)

        let fetch2 = await fetch(fetch1.species.url)
            .then(response => response.json())
            .then(evo => evo)

        let fetch3 = await fetch(fetch2.evolution_chain.url)
            .then(response => response.json())
            .then(evo => evo);

        // getEvolution(fetch3)
        getEvolution(fetch3.chain.evolves_to);

    } catch {
        console.log("Nece moci ove noci");
    }
}

fetchEvolution()

// chain:
//     evolution_details: []
//     evolves_to: []
//     is_baby: false
//     species: {name: "pinsir", url: "https://pokeapi.co/api/v2/pokemon-species/127/"}
// [[Prototype]]: Object
