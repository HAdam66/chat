import { ref, onValue, set, remove } from "firebase/database";
import { db } from '../Service/firebase';
import { v4 as uuidv4 } from 'uuid';

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