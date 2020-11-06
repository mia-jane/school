import React from 'react';
import Book from "./Book"

function BookList(props) {
    // catch passed down unread array from userState object (props.books (books={unreadBooks}))
    const {books} = props
    const mappedBooks = books.map(book => (<Book {...book} key={book._id} /> ))
    return (
        <div className="book-list">
            {mappedBooks}
        </div>
    );
}

export default BookList;