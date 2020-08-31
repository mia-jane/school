import React, {useContext} from 'react'
import {ListContext} from "./listContext"
import UglyItem from './UglyItem';


function List() {
    const {uglyThings, handleDelete} = useContext(ListContext)
    const mappedUglyThings = uglyThings.map((uglyThing) => <UglyItem key={uglyThing.title} title={uglyThing.title} description={uglyThing.description} image={uglyThing.image} delete={handleDelete} />)

    return (
        <ul>
            {mappedUglyThings}
        </ul>
    );
}

export default List