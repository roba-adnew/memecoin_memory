import PropTypes from 'prop-types'
import '../Styles/Score.css';

function Score({ score, highScore }) {
    return (
        <div id='score'>
            <p>Score: {score}</p>
            <p>Best: {highScore}</p>
        </div>
    )
}

export default Score;

Score.propTypes = {
    score: PropTypes.number,
    highScore: PropTypes.number,
}