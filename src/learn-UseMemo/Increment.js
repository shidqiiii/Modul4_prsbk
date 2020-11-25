import React, { useMemo, useState } from 'react';
import "./Increment.css"


const App = () => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const incrementNumber = () => setNumber(prev => prev + 1)
    const incrementCount = () => setCount(prev => prev + 1)

    const isNumberEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return number % 2 === 0
    }, [number])

    return (
        <div className="Main">
            <button className="Button3" onClick={incrementNumber}>number : {number} </button>
            <div className="ViewButton2">{isNumberEven ? "even" : "odd"}</div>
            <button className="Button3" onClick={incrementCount}>count: {count}</button>
        </div>
    )
}

export default App;