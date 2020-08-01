import React from "react"

const Pet = (props) => {
    return (
        <div className="pet">
            <span>{props.name}</span>
            <span>{props.breed}</span>
        </div>
    )
}

export default Pet
