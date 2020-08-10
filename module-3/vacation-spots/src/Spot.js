import React from "react"


function Spot(props){
    
    return (
        <div className="spots">
            <h4>{props.spot.place}</h4>
            <h6>Price: {props.spot.price}</h6>
            <h6 style={{backgroundColor: props.spot.timeToGo === "Spring" && "green"}}>Time to Go: {props.spot.timeToGo} </h6>
        </div>
    )
}

export default Spot