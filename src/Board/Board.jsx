import PropTypes from 'prop-types';
import './Board.css'

function Board({ deck, setDeck, shuffleDeck, setClicks }) {
    const dimIndices = [...Array(5).keys()]

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
                                    const card = deck[index];
                                    if (!card.isClicked()) {
                                        setClicks(prevClicks => prevClicks + 1)
                                        setDeck(deck.map(oldCard => {
                                            if (oldCard.id === card.id) {
                                                return {...oldCard, isClicked: true}
                                            }
                                            else { return oldCard }
                                        }))
                                        shuffleDeck();
                                    }  
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
    setClicks : PropTypes.func,
    deck : PropTypes.array,
    setDeck : PropTypes.func,
    shuffleDeck : PropTypes.func,
}

export default Board;