import React from 'react';
import { listTodo, loadTodo } from '../../Service/service';
import "../ListTodos/ListTodos.css";
import {todoStatus1, todoStatus2} from '../../Service/service';

function ListTodos() {

    const [todos, setTodos] = React.useState([]);
    
    React.useEffect(() => {
        loadTodo(setTodos)
    }, []);

    return (
        <div key={"list"} className='List'>
            <div key={"inProgress"} className='TodosInProgress'>
                <h3>In Progress</h3>
                {listTodo(todos, todoStatus1,)}
            </div>
            <div key={"done"} className='TodosDone'>
                <h3>Done</h3>
                {listTodo(todos, todoStatus2)}
            </div>
        </div>
    )
}

export default ListTodos