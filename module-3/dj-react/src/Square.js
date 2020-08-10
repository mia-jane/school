import React, { PureComponent } from 'react';

class Square extends PureComponent{
    render(){
        return(
            <div className="square" style={this.props.style}></div>
        )
    }

}

export default Square
