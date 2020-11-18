import React, {useContext, useEffect} from 'react';
import BookList from "../components/BookList"
import AddBookForm from "../components/AddBookForm"
import {UserContext} from "../context/UserProvider"

function Unread(props) {
    const {filters, getBooks, addBook, deleteBook, editBook, markFinished} = useContext(UserContext)

    useEffect(() => { 
        getBooks({finished: false})
    }, [])
    

    return (
        <div className="lists">
            <h1>Unread</h1>
            <AddBookForm submit={addBook} btnText="add" />
            <BookList books={filters.unreadBooks} delete={deleteBook} edit={editBook} toggleFinished={markFinished} finishBtn="finished" />
        </div>
    );
}

export default Unread;