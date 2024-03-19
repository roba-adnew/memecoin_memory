import { useState } from 'react'
import Board from './Board/Board.jsx';
import Score from './Score/Score.jsx';
import { Card } from './utils/functions.jsx';
import './App.css'

function App() {
  const [deck, setDeck] = useState(() => {
    const deckValues = [...Array(25).keys()];
    const deck = deckValues.map(value => Card(value + 1));
    return deck;
  });
  const [clicks, setClicks] = useState(0);

  function shuffleDeck() {
    const deckCopy = [...deck]
    let currentIndex = deckCopy.length;
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [deckCopy[currentIndex], deckCopy[randomIndex]] = [
        deckCopy[randomIndex], deckCopy[currentIndex]];
    }

    setDeck(deckCopy)
  }


  return (
    <>
      <Score clicks={clicks} />
      <Board 
        deck={deck}
        setDeck={setDeck} 
        shuffleDeck={shuffleDeck} 
        setClicks={setClicks} />
    </>
  )
}

export default App