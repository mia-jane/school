import React from 'react';
import Book from "./Book"

function BookList(props) {
    const {books} = props
    const mappedBooks = books.map(book => (<Book {...book} key={book._id} delete={props.delete} edit={props.edit} toggleFinished={props.toggleFinished} /> ))
    return (
        <div className="book-list">
            {mappedBooks}
        </div>
    );
}

export default BookList;