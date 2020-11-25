import React, { useState, useCallback } from 'react';
import "./Set.css";

const App = () => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])
    const incrementCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div className="Main">
            <Show label="number" val={number} />
            <Button label="number" action={incrementNumber} />
            <Show label="count" val={count} />
            <Button label="count" action={incrementCount} />
        </div>
    )
}

const Show = React.memo(({ label, val }) => {
    console.log(`${label} inside show render`)
    return (
        <div>
            <div className="ViewButton">{label} {val}</div>
        </div>
    )
})

const Button = React.memo(({ label, action }) => {
    console.log(`${label} inside button render`)
    return (
        <div>
            <button className="Button4" onClick={action}>add {label}</button>
        </div>
    )
})
export default App;