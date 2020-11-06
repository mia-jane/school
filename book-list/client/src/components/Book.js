import React, {useState} from 'react';
import AddBookForm from "../components/AddBookForm"


function Book(props) {
    const {title, summary, genre, imgUrl, _id } = props
    const [onEdit, setOnEdit] = useState(false)

    const handleEditSubmit = ( updatedBook, bookId) => {
        props.edit(updatedBook, bookId)
            // .then(() => setOnEdit(false))
    }
    return (
        <div className="book">
            { !onEdit ? 
                <>
                 <img src={imgUrl} alt="" />
                <h5>{title}</h5>
                <p>{genre}</p>
                <p>{summary}</p>
                <button onClick={() => props.delete(props._id)}>x</button>
                <button onClick={()=> setOnEdit(true)}>Edit</button>
                </>
                :
                <>
                    <AddBookForm 
                        btnText="submit edit" 
                        submit={handleEditSubmit}
                        title={title}
                        imgUrl={imgUrl}
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