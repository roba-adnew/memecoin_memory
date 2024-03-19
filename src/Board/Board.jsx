import PropTypes from 'prop-types';
import './Board.css'

function Board({ setClicks }) {

    let cardDeck = [...Array(25).keys()];
    let dimIndices = [...Array(5).keys()]

    return (
        <table>
            <tbody>
                {dimIndices.map(rowIndex => (
                    <tr key={rowIndex}>
                        {dimIndices.map(colIndex => (
                            <td
                                key={(5 * rowIndex) + colIndex}
                                onClick={() => {
                                    setClicks(prevClicks => prevClicks + 1)
                                }}
                            >
                                {cardDeck[(5 * rowIndex) + colIndex] + 1}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Board.propTypes = {
    setClicks: PropTypes.func
}

export default Board;