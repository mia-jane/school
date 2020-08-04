import React from "react"
import Pet from "./Pet"

const Friend = (props) => {
    const mappedPets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
    return (
        <div className="friend">
            <h3>{props.name}</h3>
            <span>Age: {props.age}</span>
            {/* <div>Pets: {props.pets}</div> */}
            {mappedPets}
            <br />
        </div>
    )
}

export default Friend
