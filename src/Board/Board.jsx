import PropTypes from 'prop-types';
import './Board.css'

function Board({
    deck,
    setDeck,
    score,
    setScore,
    highScore,
    setHighScore,
    setHasLost
}) {
    const dimIndices = [...Array(5).keys()]

    function handleCardClick(index) {
        const thisCard = deck[index];
        if (!thisCard.isClicked) {

            setScore(prevScore => {
                const newScore = prevScore + 1;
                if (newScore > highScore) setHighScore(newScore);
                return newScore
            });

            const deckCopy = deck.map(card => {
                if (card.id === thisCard.id) {
                    const newCard = { ...thisCard, isClicked: true };
                    return newCard
                }
                else { return card }
            })

            let currentIndex = deckCopy.length;
            let newIndex;

            while (currentIndex > 0) {
                newIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [deckCopy[currentIndex], deckCopy[newIndex]] = [
                    deckCopy[newIndex], deckCopy[currentIndex]];
            }

            setDeck(deckCopy)
        }
        else {
            setHasLost(true)
        }
    }

    return (
        <table>
            <tbody>
                {dimIndices.map(rowIndex => (
                    <tr key={rowIndex}>
                        {dimIndices.map(colIndex => (
                            <td
                                key={(5 * rowIndex) + colIndex}
                                onClick={() => {
                                    const index = (5 * rowIndex) + colIndex;
                                    handleCardClick(index);
                                }}
                            >
                                {deck[(5 * rowIndex) + colIndex].value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Board.propTypes = {
    deck: PropTypes.array,
    setDeck: PropTypes.func,
    score: PropTypes.number,
    setScore: PropTypes.func,
    highScore: PropTypes.number,
    setHighScore: PropTypes.func,
    setHasLost: PropTypes.func,
}

export default Board;