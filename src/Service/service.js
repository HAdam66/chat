import { ref, onValue, set } from "firebase/database";
import { db } from '../Service/firebase';
import { v4 as uuidv4 } from 'uuid';
import { FcOk, FcFullTrash, FcRedo } from "react-icons/fc";
import "../Components/ListTodos/ListTodos.css"

export const todoStatus1 = false;
export const todoStatus2 = true;

export function create(todo, setTodo, todoStatus) {
    let newId = uuidv4()
    set(ref(db, `${newId}`), {
        todo,
        newId,
        ready: todoStatus
    })
    return setTodo("");
};

export function loadTodo(setTodos) {
    return onValue(ref(db), (snapshot) => {
        setTodos([]);
        const data = snapshot.val();
        if (data !== null) {
            Object.values(data).map((todo) => {
                return setTodos((oldArray) => [...oldArray, todo]);
            });
        }
    });
};

export function listTodo(todos, todoStatus) {
    return todos !== null ? todos.map(data => {
        console.log(todos)
        return (data.ready === todoStatus
            ?
            <div className={`${data.ready}`}>
                <p>{data.todo}</p>
                {data.ready === todoStatus1
                    ?
                    <div className="Ikons">
                        <FcOk size="1.5em" onClick={() => {
                            makeReady(data, data.newId)
                        }} />
                        <FcFullTrash size="1.5em"/>
                    </div>
                    :
                    <div className="Ikons">
                        <FcRedo size="1.5em"/>
                        <FcFullTrash size="1.5em"/>
                    </div>
                }
            </div>
            :
            null)
    })
        :
        ``
};

export function makeReady(todo, id) {
    if (todo.newId === id) {
        return set(ref(db, `${id}`), {
            todo: todo.todo,
            newId: todo.newId,
            ready: todoStatus2
        });
    }
};