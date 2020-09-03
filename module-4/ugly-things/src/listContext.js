import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
const ListContext = React.createContext()

function ListContextProvider(props) {
    const [inputData, setInputData] = useState({title: "", image: "", description: ""})
    const [uglyThings, setUglyThings] = useState([])

    const handleChange = (event) => {
        const {name, value} = event.target
            setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUglyThing = {...inputData, _id:uuid()}
        setUglyThings(prevUglyThings => [...prevUglyThings, newUglyThing])
        setInputData({title: "", image:"", description: ""})
    }

    const handleDelete =(id) => {
        // setUglyThings([...uglyThings].splice(uglyThings.findIndex(uglyThing => id === uglyThing._id),1))
        const uglyThingId = uglyThings.findIndex(uglyThing => id === uglyThing._id)
        console.log(uglyThingId)
        const uglyThingsCopy = uglyThings
        uglyThingsCopy.splice(uglyThingId, 1)
        setUglyThings([...uglyThingsCopy])
        console.log(uglyThings)
    }

    // const handleEdit = (e, id, updatedItem) => {
    //     e.preventDefault()
    //     setUglyThings(prevUglyThings.map(thing => id === thing._id ? updatedItem : inputData))
    // }
    // handleEdit = (e, _id, updatedItem) => {
    //     e.preventDefault()
    //     this.setState(prevState => ({
    //         savedCards: prevState.savedCards.map(item => item._id === _id ? updatedItem : item)
    //     }))
    // }

    return (
        <ListContext.Provider value={{inputData, uglyThings, handleChange, handleSubmit, handleDelete}}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContextProvider, ListContext}