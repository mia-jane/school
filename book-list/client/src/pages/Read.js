import React, {useContext, useEffect} from "react"
import BookList from "../components/BookList"
import AddBookForm from "../components/AddBookForm"
import {UserContext} from "../context/UserProvider"

function Read(props) {
    const {filters, getBooks, addBook, deleteBook, editBook} = useContext(UserContext)

    useEffect(() => {
        getBooks({finished: true})
    }, [])

    return (
        <div className="lists">
            <h1>Finished</h1>
            <AddBookForm submit={addBook} finished btnText="add" />
            <BookList books={filters.readBooks} delete={deleteBook} edit={editBook} finishBtn="reread" />
        </div>
    );
}

export default Read;