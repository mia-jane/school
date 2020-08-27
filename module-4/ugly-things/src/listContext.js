import React, {useState} from 'react'
const ListContext = React.createContext()

function ListContextProvider(props) {
    const [inputData, setInputData] = useState({title: "", image: "", description: ""})
    const [uglyThings, setUglyThings] = useState([])

    function handleChange(event){
        const {name, value} = event.target
            setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        setUglyThings(prevUglyThings => [...prevUglyThings, inputData])
    }

    console.log(inputData)

    return (
        <ListContext.Provider value={{inputData, uglyThings, handleChange, handleSubmit}}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContextProvider, ListContext}