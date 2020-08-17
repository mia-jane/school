import React from 'react';

function RandomComponent(props) {
    return (
        <div>
            <h1 style={{backgroundColor:props.color}}>This should be a random color</h1>
        </div>
    );
}

export default RandomComponent;