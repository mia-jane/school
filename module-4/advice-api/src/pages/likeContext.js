import React, {useState} from 'react';
const LikeContext = React.createContext()

function LikeContextProvider(props) {
    const [quote, setQuote] = useState("")
    //getting quotes from local storage
    const savedQuotes = JSON.parse(localStorage.getItem("likedQuotes"))
    const [likedQuotes, setLikedQuotes] = useState(savedQuotes || [])
    
    return (
        <LikeContext.Provider value={{quote, setQuote, likedQuotes, setLikedQuotes}}  >
            {props.children}
        </LikeContext.Provider>
    );
}

export {LikeContextProvider, LikeContext}