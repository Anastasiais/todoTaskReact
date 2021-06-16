import React from "react";

function TodoItem({ text, todo, todos, setTodos }) {
  const deleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return {
            ...todo,
            completed: todo.completed,
          };
        }
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => completeHandler(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
