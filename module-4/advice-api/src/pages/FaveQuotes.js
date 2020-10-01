import React, {useContext, useEffect} from 'react';
import {LikeContext} from "./likeContext"

function FaveQuotes(props) {
    const {likedQuotes} = useContext(LikeContext)
    //saving quotes in local storage
    useEffect(() => {
        localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes))
    })
    const faveQuotes = likedQuotes.map(quote => <p className="likedQuotes">{quote}</p>)

    return (
        <div className="favQuotes">
            <h1>Favorite Quotes</h1>
            {faveQuotes}
      </div>
    );
}

export default FaveQuotes;