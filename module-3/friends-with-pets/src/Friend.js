import React from "react"
import Pet from "./Pet"

const Friend = (props) => {
    const mappedPets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
    return (
        <div className="friend">
            <h3>{props.name}</h3>
            <span>{props.age} years old</span>
            {/* <div>Pets: {props.pets}</div> */}
            <h5>Pets:</h5>
                {mappedPets}
            <br />
        </div>
    )
}

export default Friend
