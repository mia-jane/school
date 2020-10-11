import React, {useEffect, useState} from 'react';
import Book from "../components/Book"
import axios from "axios"

function Read(props) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("/books")
          .then(res => setBooks(res.data))
          .catch(err => console.log(err))
        }, [])
    return (
        <div className="lists">
            <h1>Read</h1>
            { books.map(book => <Book {...book} key={book._id} />) }
        </div>
    );
}

export default Read;