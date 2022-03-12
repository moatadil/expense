import React from 'react'
import Classes from './Button.module.css'
function Button(props) {
  return (
    <div className={Classes.actions}>
        <button type={props.type || 'button'} onClick={props.onClick} >{props.children}</button>
    </div>
  )
}

export default Button