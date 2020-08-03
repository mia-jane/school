import React from "react"

const Friend = (props) => {
    
    return (
        <div className="friend">
            <h3>{props.name}</h3>
            <span>Age: {props.age}</span>
            <div>Pets: {props.pets}</div>
            <br />
        </div>
    )
}

export default Friend
