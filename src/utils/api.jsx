const X = 25; // number pokemon picked


function pickRandX(array) {
    let num_picked = 0;
    let randArray = []
    while (num_picked < 25) {
        const randIndex = Math.round(Math.random() * array.length)
        randArray.push(array.splice(randIndex, 1))
        num_picked++;
    }
    return randArray

}

async function getPokemon(color) {

    const getPokemonColorURL = `https://pokeapi.co/api/v2/pokemon-color/${color}`

    try {
        const colorResponse = await fetch(getPokemonColorURL, { mode: 'cors' });
        const colorJSON = await colorResponse.json();
        const pokemonObjects = colorJSON.pokemon_species;

        const pokemonUrlsFull = pokemonObjects.map(ob => (ob.url));
        // const pokemonUrlsX = pokemonUrlsFull.length > X ?
        //     pickRandX(pokemonUrlsFull) :
        //     pokemonUrlsFull;

        const pokemonResponses = await Promise.all(
            pokemonUrlsFull.map(url => {
                return fetch(url, { mode: 'cors' });
            }))

        let pokemonIdUrls = Array(pokemonResponses.length);
        for (let i = 0; i < pokemonResponses.length; i++) {
            const pokeResponse = await pokemonResponses[i].json();
            pokemonIdUrls[i] =
                `https://pokeapi.co/api/v2/pokemon/${pokeResponse.id}/`
        }

        const pokemonIdResponses = await Promise.all(
            pokemonIdUrls.map(url => {
                return fetch(url, { mode: 'cors' });
            }))

        let pokemonSpriteURLs = Array(pokemonIdResponses.length);
        for (let i = 0; i < pokemonIdResponses.length; i++) {
            const pokeIdResponse = await pokemonIdResponses[i].json();
            pokemonSpriteURLs[i] =
                pokeIdResponse.sprites.other.showdown.front_default;
        }

        const cleanedSprites = pokemonSpriteURLs.filter(url => url !== null);
        const finalSprites = cleanedSprites.length > X ? 
            pickRandX(cleanedSprites) :
            cleanedSprites;

        return finalSprites;
    }
    catch (error) {
        console.log('There was an issue: ' + error);
    }
}

export { getPokemon };