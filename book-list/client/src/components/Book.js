import React, {useState} from 'react';
import AddBookForm from "../components/AddBookForm"
import "../css/book.css"


function Book(props) {
    const {title, summary, genre, imageUrl, _id } = props
    const [onEdit, setOnEdit] = useState(false)

    const handleEditSubmit = ( updatedBook, bookId) => {
        props.edit(updatedBook, bookId)
            // .then(() => setOnEdit(false))
    }
    return (
        <div className="book">
            { !onEdit ? 
                <>
                 <img src={imageUrl} alt="book cover" />
                <h5>{title}</h5>
                <p>{genre}</p>
                <p>{summary}</p>
                <button onClick={() => props.toggleFinished(props._id)}>Finished</button>
                <button onClick={() => props.delete(props._id)}>x</button>
                <button onClick={()=> setOnEdit(true)}>Edit</button>
                </>
                :
                <>
                    <AddBookForm 
                        btnText="submit edit" 
                        submit={handleEditSubmit}
                        title={title}
                        imageUrl={imageUrl}
                        summary={summary}
                        genre={genre}
                        _id={_id}
                         />
                    <button className="close-btn" onClick={() => setOnEdit(false)}>close</button>
                </>
            }
           
        </div>
    );
}

export default Book;