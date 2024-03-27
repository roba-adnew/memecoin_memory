import { v4 as uuid } from 'uuid';
import { getPokemon } from './api';

function makeNewDeck() {
    const spriteUrls = getPokemon();
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