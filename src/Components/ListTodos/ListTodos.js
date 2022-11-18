import React from 'react';
import { loadTodo } from '../../Service/service';
import "../ListTodos/ListTodos.css";
import { todoStatus1, todoStatus2 } from '../../Service/service';
import ListForm from '../ListForm/ListForm';

function ListTodos() {

    const [todos, setTodos] = React.useState([]);
    const FirstLsit = "In Progress";
    const SecondList = "Done";

    React.useEffect(() => {
        loadTodo(setTodos)
    }, []);

    return (
        <div key={'ListContainer'} className='ListContainer'>
            <ListForm todos={todos} status={todoStatus1} listName={FirstLsit} />
            <ListForm todos={todos} status={todoStatus2} listName={SecondList} />
        </div>
    )
}

export default ListTodos