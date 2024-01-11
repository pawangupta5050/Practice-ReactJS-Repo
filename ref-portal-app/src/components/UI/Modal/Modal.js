import React from 'react'
import style from './Modal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'
import reactDOM from 'react-dom'

const Backdrop = (props) => {
    return (
        <div className={style.backdrop} onClick={props.onCancel} />
    )
}

const ModalCard = (props) => {
    return (
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={style.content}>
                <p>{props.message}</p>
            </main>
            <footer className={style.actions}>
                <Button type="button" className="button" onClick={props.onCancel}>Okay</Button>
            </footer>
        </Card>
    )
}

function Modal(props) {
    return (
        <>
            {reactDOM.createPortal(<Backdrop onCancel={props.onCancel} />, document.getElementById('backdrop-root'))}
            {reactDOM.createPortal(<ModalCard onCancel={props.onCancel} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default Modal