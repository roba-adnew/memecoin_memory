import { v4 as uuid } from 'uuid';
import { getPokemon } from './api';

async function makeNewDeck() {
    const spriteUrls = await getPokemon('pink');
    const deck = spriteUrls.map(url => {
        let isClicked = false;
        return {
            id: uuid(),
            url,
            isClicked
        }
    })
    return deck;
}

export { makeNewDeck };