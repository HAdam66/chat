import React from 'react';
import { listTodo, loadTodo } from '../../Service/service';
import "../ListTodos/ListTodos.css";
import { todoStatus1, todoStatus2 } from '../../Service/service';

function ListTodos() {

    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        loadTodo(setTodos)
    }, []);

    return (
        <div className='ListContainer'>
            <div className='ListBox'>
                <h3>In Progress</h3>
                <div className='TodosInProgress'>
                    {listTodo(todos, todoStatus1,)}
                </div>
            </div>
            <div className='ListBox'>
                <h3>Done</h3>
                <div className='TodosDone'>
                    {listTodo(todos, todoStatus2)}
                </div>
            </div>
        </div>
    )
}

export default ListTodos