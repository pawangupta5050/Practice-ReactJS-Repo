import React from 'react'
import style from './Modal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'

function Modal(props) {
    return (
        <div>
            <div className={style.backdrop} onClick={props.onCancel} />
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
        </div>
    )
}

export default Modal