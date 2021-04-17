
import React, { useState } from 'react'

export const Testimonials = () => {

    const [count,setCount] = useState(1)
    const [color,setColor] = useState("green")

    const toggleColor = () => {
        setColor((value) => (
            value === 'red' ? 'green' : 'red'
        ))
    }

    return (
        <>
            <h2 className="page-title">Testimonials</h2>
            <p style={{color: {color},}}>Color:{color}</p>
            <div>
                <button onClick={() => toggleColor()}>Change color</button>
            </div>
            <button onClick={() => setCount(count-1)}>-</button>
            <input type="text" value={count} />
            <button onClick={() => setCount(count+1)}>+</button>
        </>
    )
}