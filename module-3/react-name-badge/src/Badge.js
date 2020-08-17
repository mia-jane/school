import React from 'react';

const Badge = (props) => {
    return (
        <div className="badge" contents={props.contents}>
            <h5>Badge:</h5>
            <span>Name:{props.firstName} {props.lastName}</span>
            <span>Phone: {props.phone}</span>
            <span>Email: {props.email}</span>
            <span>Favorite Food: {props.faveFood}</span>
            <span>Place of Birth:{props.birthPlace}</span>
            <p>About me: {props.blurb}</p>
        </div>
    );
};

export default Badge;