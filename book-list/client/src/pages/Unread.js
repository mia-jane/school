import React, {useContext, useEffect} from 'react';
import BookList from "../components/BookList"
import AddBookForm from "../components/AddBookForm"
import {UserContext} from "../context/UserProvider"

function Unread(props) {
    const {books, getUnread, addUnreadBook, deleteBook, editBook, markFinished} = useContext(UserContext)

    useEffect(() => {getUnread()}, [])

    return (
        <div className="lists">
            <h1>Unread</h1>
            <AddBookForm submit={addUnreadBook} btnText="add" />
            <BookList books={books} delete={deleteBook} edit={editBook} toggleFinished={markFinished} />
        </div>
    );
}

export default Unread;