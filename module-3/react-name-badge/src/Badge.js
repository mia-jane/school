import React from 'react';

function Badge(props){
    const prettyStyle = {
        backgroundColor: props.count % 2 === 0 ? "blue" : "green"
    }
    return (
        <div className="badge" contents={props.contents} style ={prettyStyle}>
            <div className="badge-contents">
                <h5>Badge:</h5>
                <span className="name">Name:{props.firstName} {props.lastName}</span>
                <span className="phone">Phone: {props.phone}</span>
                <span className="email">Email: {props.email}</span>
                <span className="food">Favorite Food: {props.faveFood}</span>
                <span className="birth">Place of Birth:{props.birthPlace}</span>
                <p className="about">About me: {props.blurb}</p>
            </div>
        </div>
    );
};

export default Badge;