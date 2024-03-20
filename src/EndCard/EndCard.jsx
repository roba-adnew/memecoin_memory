import PropTypes from 'prop-types'
import './EndCard.css'

function EndCard({ hasLost, setHasLost }) {

    return (
        <>
            {hasLost && (
                <dialog className={hasLost ? 'open' : 'close'}>
                    <div>Not bad, want to try again?</div>
                    <button onClick={() => setHasLost(false)}>Yeah, let&apos;s try again</button>
                </dialog>
            )}
        </>
    )
}

EndCard.propTypes = { 
    hasLost : PropTypes.bool,
    setHasLost : PropTypes.func,
 }

export default EndCard;
