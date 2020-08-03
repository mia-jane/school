import React from "react"

const Pet = (props) => {
    return (
        <div className="pet">
            <span>name: {props.name}</span>
            <span>breed: {props.breed}</span>
        </div>
    )
}

export default Pet
