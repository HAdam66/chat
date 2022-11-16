import { ref, onValue, set, remove } from "firebase/database";
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
        return (data.ready === todoStatus
            ?
            <div key={data.newId} className={`${data.ready}`}>
                <p key={data.todo}>{data.todo}</p>
                {data.ready === todoStatus1
                    ?
                    <div key={"Ikons"} className="Ikons">
                        <FcOk size="1.5em" onClick={() => {
                            makeReady(data, data.newId)
                        }} />
                        <FcFullTrash size="1.5em" onClick={() => {
                            del(data, data.newId)
                        }} />
                    </div>
                    :
                    <div key={"Ikons2"} className="Ikons">
                        <FcRedo size="1.5em" onClick={() => {
                            removeTodod(data, data.newId)
                        }}/>
                        <FcFullTrash size="1.5em"
                            onClick={() => {
                                del(data.newId)
                            }} />
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
    return set(ref(db, `${id}`), {
        todo: todo.todo,
        newId: todo.newId,
        ready: todoStatus2
    });
};

export function removeTodod(todo, id) {
    return set(ref(db, `${id}`), {
        todo: todo.todo,
        newId: todo.newId,
        ready: todoStatus1
    });
}

export function filter(todos, todoStatus) {
    const numberArray = [];
    todos.map(data => {
        if (data.ready === todoStatus) {
            numberArray.push(data)
        }
        return data
    })
    return numberArray.length
}

export function del(id) {
    remove(ref(db, `/${id}`));
}