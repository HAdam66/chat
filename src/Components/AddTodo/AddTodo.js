import React from 'react';
import '../AddTodo/AddTodo.css';
import { create } from '../../Service/service';
import {todoStatus1} from '../../Service/service';

function AddTodo() {
  const [todo, setTodo] = React.useState("");
  const handleTodo = (e) => {
      setTodo(e.target.value)
  };
  const Label = "Create a new to do"

  return (
    <div className='AddTodoContainer'>
      <label>{Label}</label>
      <input maxLength={20} value={todo} onChange={handleTodo}></input>
      <button onClick={() => {
        create(todo, setTodo, todoStatus1);
      }}>Create</button>
    </div>
  )
}

export default AddTodo