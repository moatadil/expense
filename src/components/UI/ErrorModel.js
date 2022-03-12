import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import Styles from './ErrorModel.module.css'
function ErrorModel(props) {
    const Backdrop = (props) => {
        return <div className={Styles.backdrop} onClick={props.onConfirm}></div>
    }
    const Model = (props) => {
        return (
            <Card className={Styles.modal}>
                <header className={Styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={Styles.body}>
                    <div className={Styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={Styles.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </div>
            </Card>
        )
    }
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('overlay_backdrop'))}
            {ReactDOM.createPortal(<Model title={props.title} message={props.message}  onConfirm={props.onConfirm} />, document.getElementById('overlay_model'))}
        </>
    )
}

export default ErrorModel