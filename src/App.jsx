import { useState, useEffect } from 'react'
import Board from './Components/Board.jsx';
import Score from './Components/Score.jsx';
import EndCard from './Components/EndCard.jsx'
import { makeNewDeck } from './utils/functions.jsx';
import './App.css'


function App() {
	const [deck, setDeck] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [hasLost, setHasLost] = useState(false);

	useEffect(() => {
		async function fetchInitialDeck() {
			try {
				const initialDeck = await makeNewDeck();
				setDeck(initialDeck);
			}
			catch (error) {
				console.log(`Initial deck error: ${error}`)
			}
			finally {
				setIsLoading(false)
			}
			
		}
		fetchInitialDeck();
	}, []);

	useEffect(() => {
		async function resetDeck() {
			try {
				const newDeck = await makeNewDeck();
				setDeck(newDeck);
			}
			catch (error) {
				console.log(`New deck error: ${error}`)
			}
			finally {
				setIsLoading(false)
			}
		}
		resetDeck();
	}, [hasLost]);


	if (isLoading) {
		return <div>Loading up the deck...</div>
	}

	if (deck.length === 0) {
		return <div>Sorry, there was an issue loading the deck</div>
	}
	return (
		<>
			<Score
				score={score}
				highScore={highScore}
			/>
			<Board
				deck={deck}
				setDeck={setDeck}
				score={score}
				setScore={setScore}
				highScore={highScore}
				setHighScore={setHighScore}
				setHasLost={setHasLost}
			/>
			<EndCard
				hasLost={hasLost}
				setHasLost={setHasLost}
				setScore={setScore}
			/>
		</>
	)
}



export default App;