import React from 'react'

export default function MakeOrderBtn({ children, ...props }) {
    return (
        <div className='makeOrder-btn'>
            <button {...props}>
                {children}
            </button>
        </div>

    )
}
