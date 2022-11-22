import React from 'react';
import '../TodoContainer/TodoContainer.css';
import ListTodos from '../ListTodos/ListTodos';
import AddTodo from '../AddTodo/AddTodo';

function TodoContainer() {

    return (
        <div className='TodoContainer'>
            <div className='TodoTable'>
                <h2>To Do List</h2>
                <AddTodo />
                <ListTodos />               
            </div>
        </div>
    )
}


export default TodoContainer;