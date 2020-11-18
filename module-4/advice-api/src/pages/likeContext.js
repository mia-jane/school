import React, {useState} from 'react';
const LikeContext = React.createContext()

function LikeContextProvider(props) {
    const [quote, setQuote] = useState("")
    // const [quote, setQuote] = useState({})
    //getting quotes from local storage
    const savedQuotes = JSON.parse(localStorage.getItem("likedQuotes"))
    const [likedQuotes, setLikedQuotes] = useState(savedQuotes || [])

    const deleteQuote = (quote) => {
        const index = savedQuotes.indexOf(quote)
        const newArr = likedQuotes.splice(index, 1)
        setLikedQuotes(newArr)
    }

  
    
    return (
        <LikeContext.Provider value={{quote, setQuote, likedQuotes, setLikedQuotes,deleteQuote}}  >
            {props.children}
        </LikeContext.Provider>
    );
}

export {LikeContextProvider, LikeContext}