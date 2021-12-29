import React from "react";
import classes from './Input.module.scss'



const Input = props => {
    const inputType = props.type
    const name = props.name
    const htmlFor = `${inputType}-${Math.random()}`

    let cls = []
    
    if (inputType === 'checkbox' || inputType === 'radio') {
        cls = [
            classes.inputCursor
        ]
    }
    
    return (
        <div className={classes.Input}>
            <label htmlFor={htmlFor} className={cls}>
                <input 
                    type={inputType}
                    id={htmlFor}
                    name={name}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.label}
            </label>
        </div>
    )
    
}

export default Input