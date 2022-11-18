import React from 'react';
import { filter, todoStatus1 } from '../../Service/service';
import Icons from '../Icons/Icons';


function ListForm(props) {

    let todos = props.todos;
    let status = props.status;
    let listName = props.listName;

    return (
        <div key={'ListBox'} className={
            status === todoStatus1
                ?
                "ListBox"
                :
                "ListBoxDone"
        }>
            <div className={
                status === todoStatus1
                    ?
                    "ListName"
                    :
                    "ListNameDone"
            }>

                <h3>{filter(todos, status)}</h3>
                <h3 key={'h3'}>{listName}</h3>
            </div>
            <div key={listName} className={"List"}>
                {todos.map(data => {
                    return (data.ready === status
                        ?
                        <div key={data.newId} className={`${data.ready}`}>
                            <p key={data.todo} className={"Todo"}>{data.todo}</p>
                            <Icons todo={data} id={data.newId} />
                        </div>
                        :
                        null)
                })}
            </div>
        </div>
    )
}

export default ListForm