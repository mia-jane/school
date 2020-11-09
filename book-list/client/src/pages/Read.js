import React, {useContext, useEffect} from "react"
import BookList from "../components/BookList"
import AddBookForm from "../components/AddBookForm"
import {UserContext} from "../context/UserProvider"

function Read(props) {
    const {books, getFinished, addFinishedBook, deleteBook, editBook, markFinished} = useContext(UserContext)

    useEffect(() => {getFinished()}, [])

    return (
        <div className="lists">
            <h1>Finished</h1>
            <AddBookForm submit={addFinishedBook} btnText="add" />
            <BookList books={books} delete={deleteBook} edit={editBook} toggleFinished={markFinished} finishBtn="reread" />
        </div>
    );
}

export default Read;