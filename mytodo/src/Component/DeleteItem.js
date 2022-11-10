export default function DeleteItem({ todos, id, setTodos }) {
    const deleteTodo = () => {
        console.log("id ", id)
        const todo = todos.filter(todoId => todoId.id !== id);
        setTodos(todo)
    }

    return (<div className='delete' onClick={() => deleteTodo()}>Delete</div>)
}