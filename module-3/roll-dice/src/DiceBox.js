import React from "react"

class DiceBox extends React.Component{
    render() {
        return (
            <div className="dice">{this.state.number}</div>
        )
    }
}

export default DiceBox