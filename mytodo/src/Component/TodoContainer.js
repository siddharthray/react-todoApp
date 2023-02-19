import { useState } from "react";
import updateData from "../util/util";
import TodosList from "./TodosList";
import {
    Button
} from '@mui/material';

export default function TodoContainer() {
    let [todoObject, setTodoObject] = useState({})
    let [todos, setTodos] = useState([]);
    let [isEditMode, setEditMode] = useState(false);
    const addTask = (todoObject = {}) => {
        if (!isEditMode) {
            let copy = [...todos];
            copy = [...copy, { ...todoObject }];
            setTodos(copy);
        } else {
            const copy = updateData(todos, todoObject, "task")
            setTodos(copy);
            setEditMode(false);
        }
    }

    const changeHandler = (event) => {
        event.preventDefault();
        if (event.target.value.trim() === "" || event.target.value === "") {
            return
        }
        isEditMode ? setTodoObject({
            id: todoObject.id, task: event.target.value, complete: false
        }) : setTodoObject({
            id: todos.length + 1, task: event.target.value, complete: false
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(todoObject).length === 0) {
            return
        }
        addTask(todoObject);
        setTodoObject({});
    }


    return (
        <>
            <div className="inputGrid">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="todo">
                        Todos:
                    </label>
                    <input id="todo-input" name="todo"
                        placeholder="Write Your Todos"
                        value={todoObject?.task || ""}
                        type="text"
                        onChange={changeHandler}
                    />
                    <Button type="submit" variant="contained" color="primary" className="addBtn">Submit</Button>
                </form>
            </div>

            {todos?.length > 0 && (<TodosList setTodos={setTodos} todos={todos} setTodoObject={setTodoObject} setEditMode={setEditMode} />)}

        </>

    )
}