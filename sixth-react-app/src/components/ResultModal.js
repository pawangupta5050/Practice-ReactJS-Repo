import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {

    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    const dialog = useRef()

    useImperativeHandle(ref, () =>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>
            <h2>You {userLost ? 'Lost' : `scored: ${score}`}</h2>
            <p>The Taret time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTime} seconds left</strong></p>
            <form method='dialog' onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>, 
        document.getElementById('modal')
    )
})

export default ResultModal