import React from 'react';


function Book(props) {
    // const {title, summary, genre } = props
    return (
        <div className="book">
            <img src={props.imageUrl} alt="" />
            <h5>{props.title}</h5>
            <p>{props.genre}</p>
            <p>{props.summary}</p>
        </div>
    );
}

export default Book;