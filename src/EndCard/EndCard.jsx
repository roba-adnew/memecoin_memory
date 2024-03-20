import { useRef } from 'react'
import PropTypes from 'prop-types'
import './EndCard.css'

function EndCard({ hasLost, setHasLost }) {

    const dialogRef = useRef(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return
        }

        dialogRef.current.hasAttribute('open') ?
            dialogRef.current.close() :
            dialogRef.current.showModal();

    }

    return (
        <>
            <dialog ref={dialogRef}>
                <div>Not bad, want to try again?</div>
                <button
                    onClick={() => {
                        toggleDialog();
                        setHasLost(false);
                    }}
                >
                    Yeah, let&apos;s try again</button>
            </dialog>
            {hasLost && dialogRef.current.showModal()}
        </>
    )
}

EndCard.propTypes = {
    hasLost: PropTypes.bool,
    setHasLost: PropTypes.func,
}

export default EndCard;
