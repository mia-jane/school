import React, { useEffect, useState, useContext } from 'react';
import Heart from "react-animated-heart"
import {LikeContext} from "./likeContext"
const axios = require("axios")


function Home(props) {

    const {quote, setQuote, setLikedQuotes} = useContext(LikeContext)

    const [quotesArr, setQuotesArr] = useState([])
    const [isClick, setClick] = useState(false)

    useEffect(() => {
        axios.get("https://type.fit/api/quotes").then(res => {
            // console.log(res.data[0].text)
            setQuotesArr(res.data)
            // console.log(quotesArr)

        })
    })

    const handleClick = () => {
        const randomQuoteIndex = Math.floor(Math.random() * 1644)
        console.log(randomQuoteIndex)
        const randomQuote = quotesArr[randomQuoteIndex].text
        console.log(randomQuote)
        setQuote(randomQuote)
        // setQuote({text: randomQuote, _id: uuid()})
        setClick(false)
        // console.log(quotesArr[randomQuoteIndex].text)
        
    }

    const handleHeartClick = () => {
        setClick(!isClick)
        setLikedQuotes(prev => [...prev, quote])
    }

    return (
        <div className="home">
            <h1>Quotes</h1>
            <div>
                <p>save your favorite quotes</p>
                <button onClick={handleClick} type="button">get quote</button>
                <div className="quotebox">
                    <span className="fade-in">{quote}</span>
                    {/* <Heart className="heart" isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                    <Heart isClick={isClick} onClick={handleHeartClick} />
                </div>
            </div>
      </div>
    );
}

export default Home;

