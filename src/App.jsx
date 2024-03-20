import { useState } from 'react'
import Board from './Components/Board.jsx';
import Score from './Components/Score.jsx';
import EndCard from './Components/EndCard.jsx'
import { Card } from './utils/functions.jsx';
import './App.css'

function App() {
	const [deck, setDeck] = useState(() => makeNewDeck());
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [hasLost, setHasLost] = useState(false);

	function makeNewDeck() {
		const deckValues = [...Array(25).keys()];
		const deck = deckValues.map(value => Card(value + 1));
		return deck
	}

	function setNewDeck () { setDeck(makeNewDeck()) }

	return (
		<>
			<Score 
				score={score}
				highScore={highScore} />
			<Board
				deck={deck}
				setDeck={setDeck}
				score={score}
				setScore={setScore}
				highScore={highScore}
				setHighScore={setHighScore}
				setHasLost={setHasLost} />
			<EndCard
				hasLost={hasLost}
				setHasLost={setHasLost}
				setScore={setScore}
				setNewDeck={setNewDeck}
			/>
		</>
	)
}

export default App