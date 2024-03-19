import PropTypes from 'prop-types'

function Score({ score }) {
    return (
        <p>Score: {score}</p>
    )
}

export default Score;

Score.propTypes = {
    score : PropTypes.number
}