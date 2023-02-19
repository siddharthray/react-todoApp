export default function CompletedList({ todos }) {
    return (
        <div>
            {todos?.filter(ele => ele.complete === true).length > 0 ? <h5>Completed List</h5> : <h5>NO COMPLTED LIST</h5>}
            {todos?.filter(ele => ele.complete === true).map((item, i) =>
                <div key={item.id}>{i - 0 + 1}. {item.task}</div>
            )}
        </div>
    )
}