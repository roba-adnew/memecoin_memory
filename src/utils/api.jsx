function pickCont25(array) {
    const viableStart = array.length - 25;
    const start = Math.round(Math.random * viableStart);
    return array.slice(start,25)
}

async function getPokemon(color) {
    
    const getPokemonColorURL = `https://pokeapi.co/api/v2/pokemon-color/${color}`

    try {
        const colorResponse = await fetch(getPokemonColorURL, {mode: 'cors'});
        const colorJSON = await colorResponse.json();
        const pokemonObjects = colorJSON.pokemon_species;

        let pokemonURLS = pokemonObjects.map(ob => (ob.url));
        pokemonURLS = pokemonURLS.length > 25 ? 
        pickCont25(pokemonURLS) :
            pokemonURLS;

        const pokemonResponses = await Promise.all(
            pokemonURLS.map(url => {return fetch(url, {mode: 'cors'});
        }))

        let pokemonIdUrls = Array(25);
        for (let i = 0; i < pokemonResponses.length; i++) {
            const pokeResponse = await pokemonResponses[i].json();
            pokemonIdUrls[i] = 
                `https://pokeapi.co/api/v2/pokemon/${pokeResponse.id}/`
        }

        const pokemonIdResponses = await Promise.all(
            pokemonIdUrls.map(url => {return fetch(url, {mode: 'cors'});
        }))

        let pokemonSpriteURLs = Array(25);
        for (let i = 0; i < pokemonIdResponses.length; i++) {
            const pokeIdResponse = await pokemonIdResponses[i].json();
            pokemonSpriteURLs[i] = 
                pokeIdResponse.sprites.other.showdown.front_default;
        }

        return pokemonSpriteURLs;
    }
    catch (error) {
        console.log('There was an issue: ' + error);  
    }
}

export  { getPokemon };