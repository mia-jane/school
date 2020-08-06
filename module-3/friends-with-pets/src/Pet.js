import React from "react"

const Pet = (props) => {
    return (
        <div className="pet">
            <span className="pet-names">{props.name}: {props.breed}</span>
        </div>
    )
}

export default Pet
