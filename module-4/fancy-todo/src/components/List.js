import React, {useContext} from 'react';
import ListItem from "./ListItem"
import {DataContext} from "./DataProvider"

export default function List(props) {
    const [todos, setTodos] = useContext(DataContext);
    console.log(todos)
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index} />
                ))}
            </ul>
        </div>
    )
}
