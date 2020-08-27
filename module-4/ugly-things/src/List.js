import React, {useContext} from 'react'
import {ListContext} from "./listContext"
import UglyItem from './UglyItem';


function List() {
    const {uglyThings} = useContext(ListContext)
    const mappedUglyThings = uglyThings.map(uglyThing => <UglyItem title={uglyThing.title} description={uglyThing.description} image={uglyThing.image} />)
    return (
        <ul>
            {mappedUglyThings}
        </ul>
    );
}

export default List