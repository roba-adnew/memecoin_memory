import { useRef } from 'react'
import PropTypes from 'prop-types'
import '../Styles/EndCard.css'

function EndCard({ hasLost, setHasLost, setScore, setNewDeck }) {

    const dialogRef = useRef(null);

    function reset() {
        if (!dialogRef.current) { return }
        setHasLost(false);
        setScore(0);
        setNewDeck();
        dialogRef.current.close(); 
    }
    
    return (
        <>
            <dialog ref={dialogRef}>
                <div>Not bad, want to try again?</div>
                <button onClick={() => reset()}>
                    Yeah, let&apos;s try again</button>
            </dialog>
            {hasLost && dialogRef.current.showModal()}
        </>
    )
    }
    
    EndCard.propTypes = {
    hasLost: PropTypes.bool,
    setHasLost: PropTypes.func,
    setScore: PropTypes.func,
    setNewDeck: PropTypes.func,
    }
    
    export default EndCard;