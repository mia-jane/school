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

    const handleDelete = (id) => {
        setUglyThings(prev => prev.filter(uglyThing => id !== uglyThing._id))
        // const uglyThingId = uglyThings.findIndex(uglyThing => id === uglyThing._id)
        // const uglyThingsCopy = [...uglyThings]
        // uglyThingsCopy.splice(uglyThingId, 1)
        // setUglyThings(uglyThingsCopy)
    }


    const handleEdit = (id, editValue) => {
        setUglyThings(prevUglyThings => {
            console.log(prevUglyThings.map(uglyThing => id === uglyThing._id ? editValue : uglyThing))
            return prevUglyThings.map(uglyThing => id === uglyThing._id ? editValue : uglyThing)
        })
    }

    return (
        <ListContext.Provider value={{inputData, uglyThings, handleChange, handleSubmit, handleDelete, handleEdit}}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContextProvider, ListContext}