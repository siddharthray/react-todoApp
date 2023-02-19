
export default function EditItem({ todos, id, setTodoObject, setEditMode }) {
    const editItem = () => {
        console.log("id ", id)
        const todo = todos.find(todoId => todoId.id === id);
        setTodoObject(todo)
        setEditMode(true)
    }

    return (<div className='edit' onClick={() => editItem()}>Edit</div>)
}