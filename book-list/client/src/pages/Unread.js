import React, {useContext, useEffect} from 'react';
import BookList from "../components/BookList"
import AddBookForm from "../components/AddBookForm"
import {UserContext} from "../context/UserProvider"

function Unread(props) {
    const {unreadBooks, getUnread, addUnreadBook, deleteBook, editBook} = useContext(UserContext)

    useEffect(() => {getUnread()}, [])

    return (
        <div className="lists">
            <h1>Unread</h1>
            <AddBookForm submit={addUnreadBook} btnText="add" />
            <BookList books={unreadBooks} delete={deleteBook} edit={editBook} />
        </div>
    );
}

export default Unread;