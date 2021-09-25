const pokemones = document.querySelector(".pokemones");
const img = document.createElement("img");
pokemones.append(img);

function Pokemon(id, name, img) {
    this.id = id,
    this.name = name,
    this.img = img
}

async function fetchPokemon() {
    let random = Math.floor(Math.random() * 898);
    let url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    await fetch(url)
    .then(response => response.json())
    .then(pokemon => getPokemon(pokemon))
}

const getPokemon = (pokemon) => {
    let pokemonObj = new Pokemon(pokemon.id, pokemon.name, pokemon.sprites.front_default)
    console.log(pokemonObj)

    img.src = pokemon.sprites.front_default;
}

fetchPokemon()
// console.log(pokemon)

