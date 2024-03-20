import PropTypes from 'prop-types'

function Score({ score, highScore }) {
    return (
        <>
        <p>Score: {score}</p>
        <p>Best: {highScore}</p>
        </>
    )
}

export default Score;

Score.propTypes = {
    score : PropTypes.number,
    highScore : PropTypes.number,
}