import React from 'react';
import { MdDone, MdRedo, MdDelete } from "react-icons/md";
import { del, makeReady, removeTodod, todoStatus1 } from '../../Service/service';
import "../ListTodos/ListTodos.css";

function Icons(props) {

    let todo = props.todo;
    let id = props.id;


    return (
        <div key={"Icons"} className="Icons">
            {todo.ready === todoStatus1
                ?
                <div className='Icon'>
                    <MdDone size="1.5em" onClick={() => {
                        makeReady(todo, id)
                    }} />
                </div>
                :
                <div className='IconDone'>
                    <MdRedo size="1.5em" onClick={() => {
                        removeTodod(todo, id)
                    }} />
                </div>

            }
            <div className={todo.ready === todoStatus1
                ?
                'Icon'
                :
                'IconDone'
            }>
                <MdDelete size="1.5em" onClick={() => {
                    del(id)
                }} />
            </div>
        </div>
    )
}

export default Icons;