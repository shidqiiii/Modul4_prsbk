import React from 'react'
import "./Set.css"

export const ChildFive = ({ name }) => {
    console.log('Child Render')
    return (
        <div className="ViewButton">
            Hello {name}
        </div>
    )
}

export const MemoizedChildFive = React.memo(ChildFive)