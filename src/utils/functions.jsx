import { v4 as uuid } from 'uuid';

function Card(value) {
    let isClicked = false;
    return {
        id: uuid(),
        value,
        isClicked
    }
}

export { Card };