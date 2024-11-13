console.log(555);

console.log(555);

const axoistest = require("axios");

async function fetchapi(){

    const data = await axoistest.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(data.data);
}

fetchapi();