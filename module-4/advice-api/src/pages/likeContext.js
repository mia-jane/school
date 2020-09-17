import React, {useState} from 'react';
const LikeContext = React.createContext()

function LikeContextProvider(props) {

    const [quote, setQuote] = useState("")
    const [likedQuotes, setLikedQuotes] = useState([])
    
    return (
        <LikeContext.Provider value={{quote, setQuote, likedQuotes, setLikedQuotes}}  >
            {props.children}
        </LikeContext.Provider>
    );
}

export {LikeContextProvider, LikeContext}