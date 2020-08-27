import React from 'react'


function UglyItem(props) {
    return (
        <>
            <li>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
                <img src={props.image} alt="" />
            </li>
        </>
    )
}

export default UglyItem;