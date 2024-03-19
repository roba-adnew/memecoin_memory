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
	const [score, setScore] = useState(0);

	return (
		<>
			<Score score={score} />
			<Board
				deck={deck}
				setDeck={setDeck}
				setScore={setScore} />
		</>
	)
}

export default App