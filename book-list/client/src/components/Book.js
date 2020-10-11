import React from 'react';


function Book(props) {
    return (
        <div className="book">
            <img src={props.imageUrl} alt="" />
            <h5>{props.genre}</h5>
            <p>{props.summary}</p>
        </div>
    );
}

export default Book;