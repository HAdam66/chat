import React from 'react';
import { filter, listTodo, loadTodo } from '../../Service/service';
import "../ListTodos/ListTodos.css";
import { todoStatus1, todoStatus2 } from '../../Service/service';

function ListTodos() {

    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        loadTodo(setTodos)
    }, []);

    return (
        <div key={'ListContainer'} className='ListContainer'>
            <div key={'ListBox'} className='ListBox'>
                <h3 key={'h3'}>In Progress {filter(todos, todoStatus1)}</h3>
                <div key={'TodosInProgress'} className='TodosInProgress'>
                    {listTodo(todos, todoStatus1,)}
                </div>
            </div>
            <div key={'ListBox1'} className='ListBox'>
                <h3 key={'h31'}>Done {filter(todos, todoStatus2)}</h3>
                <div key={'TodosDone'} className='TodosDone'>
                    {listTodo(todos, todoStatus2)}
                </div>
            </div>
        </div>
    )
}

export default ListTodos