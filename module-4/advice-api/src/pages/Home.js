import React, { useEffect, useState } from 'react';


function Home(props) {
    const axios = require("axios")
    const [quote, setQuote] = useState("")
    const [quotesArr, setQuotesArr] = useState("")

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
        // console.log(quotesArr[randomQuoteIndex].text)
        
    }


    return (
        <div className="home">
            <h1>Magic 8 ball</h1>
            <div>
                <p>What advice does the magic 8 ball have for you?</p>
                <button onClick={handleClick} type="button">Ask</button>
                <p className="fade-in">{quote}</p>
            </div>
            {/* <form>
                <input type="text" placeholder="Ask your question" />
                <button type="submit">Ask</button>
            </form> */}
      </div>
    );
}

export default Home;





    // useEffect(() => {
    //     axios.get("https://api.adviceslip.com/advice").then(res => {
    //         setAdvice(res.data.slip.advice)
    //         // console.log(res.data.slip.advice)
    //     })
    // })