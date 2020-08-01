import React from "react"
//import friends from "./FriendList"
import Pet from "./Pet"

const Friend = (props) => {
    return (
        <div className="friend">
            <h3>{props.name}</h3>
            <span>Age: {props.age}</span>
            <span>Pets: {props.pets}</span>
        </div>
    )
}

export default Friend

//should have name, age, and pets as props
//should render the pets component