import "./Todo.css";

function Todo({title, paragraph}) {
    return (
        <div className="Todo">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button>Delete</button>
      </div>
    )
}

export default Todo