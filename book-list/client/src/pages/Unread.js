import React from 'react';
import Book from "../components/Book"

function Unread(props) {
    return (
        <div className="lists">
            <h1>Unread</h1>
            <Book />
        </div>
    );
}

export default Unread;