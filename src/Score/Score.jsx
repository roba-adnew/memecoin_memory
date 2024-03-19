import PropTypes from 'prop-types'

function Score({ clicks }) {
    return (
        <p>Score: {clicks}</p>
    )
}

export default Score;

Score.propTypes = {
    clicks: PropTypes.number
}