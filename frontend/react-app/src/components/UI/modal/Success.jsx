import React from 'react'
import classes from './Success.module.css'

export default function Success({ ...props }) {
    return (
        <div className={classes.successContainer}>
            <div className={classes.textWrap}>
                <button
                    {...props}
                    className={classes.close}
                >
                    X
                </button>
                <div className={classes.text}>Done!</div>
            </div>
        </div>
    )
}
