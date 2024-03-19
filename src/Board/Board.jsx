// import { useState } from 'react';
// import PropTypes from 'prop-types';
import './Board.css'

function Board() {

    let cardDeck = [...Array(25).keys()];
    let dimIndices = [...Array(5).keys()]

    return (
        <div>
            <table>
                <tbody>
                    {dimIndices.map(rowIndex => (
                        <tr key={rowIndex}>
                            {dimIndices.map(colIndex => (
                                <td key={(5 * rowIndex) + colIndex}>
                                    {cardDeck[(5 * rowIndex) + colIndex]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Board;