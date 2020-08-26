import React from 'react';

function HitTarget(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image}/>
        </div>
    );
}

export default HitTarget;