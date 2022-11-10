import CompletedList from "../Pages/CompletedList";
import updateData from "../util/util";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";

export default function TodosList({ setTodos, todos, setTodoObject, setEditMode }) {

    const handleChecked = (id) => {
        console.log("id ", id)
        const todo = todos.find(todoId => todoId.id === id);
        const copy = updateData(todos, todo)
        setTodos(copy);

    }
    return (
        <>
            <div className='listGrid'>
                {todos?.length > 0 && Object.keys(todos).map(item =>
                    <div className='list' key={item}>
                        <div className='todoblock'>
                            <input type="checkbox" id="todo" name="todo" checked={todos[item].complete} onChange={() => handleChecked(todos[item].id)} />
                            <span className={`${todos[item].complete ? 'checkedTodo' : ''}`}>{item - 0 + 1}. {todos[item].task}</span>
                        </div>
                        <div className='modificationContainer'>
                            <DeleteItem todos={todos} id={todos[item].id} setTodos={setTodos} />
                            <EditItem todos={todos} id={todos[item].id} setTodoObject={setTodoObject} setEditMode={setEditMode} />
                        </div>
                    </div>
                )}
            </div>
            <CompletedList todos={todos} />
        </>

    )
}