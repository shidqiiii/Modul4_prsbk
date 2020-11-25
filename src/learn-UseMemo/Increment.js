import React, { useState, useMemo } from 'react'
import { MemoizedChildFive } from './Child'
import "./Increment.css"

function App3() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Daffa')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne',
    }

    const memoizedPerson = useMemo(() => person, [])

    console.log('Parent Render')
    return (
        <div className="Main1">
            <button className="Button4" onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button className="Button4" onClick={() => setName('Kelompok 10')}>Change name</button>
            <MemoizedChildFive name={name} person={memoizedPerson} />
        </div>
    )
}

export default App3;