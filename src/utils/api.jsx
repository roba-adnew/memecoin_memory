async function getPokemon() {
    
    const getPokemonColorURL = 'https://pokeapi.co/api/v2/pokemon-color/black'

    try {
        const colorResponse = await fetch(getPokemonColorURL, {mode: 'cors'});
        const colorJSON = await colorResponse.json();
        const pokemonObjects = colorJSON.pokemon_species;

        let pokemonURLS = pokemonObjects.map(ob => (ob.url));
        pokemonURLS = pokemonURLS.length > 25 ? 
            pokemonURLS.slice(0,25) :
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