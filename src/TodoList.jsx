import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    const todoText = text.trim();
    if (!todoText) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: todoText, done: false },
    ]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id),
    );
  };

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.done));
  };

  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <section className="demo">
      <h2>To-do list</h2>
      <form className="form-row" onSubmit={addTodo}>
        <label className="visually-hidden" htmlFor="todo-text">
          New to-do
        </label>
        <input
          id="todo-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.length === 0 && <p>Nothing to do yet.</p>}
      {todos.length > 0 && (
        <ul className="todo-items">
          {todos.map((todo) => (
            <li key={todo.id}>
              <button
                type="button"
                className={`todo-toggle${todo.done ? " is-done" : ""}`}
                aria-pressed={todo.done}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </button>
              <button type="button" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>{todos.filter((todo) => !todo.done).length} remaining</p>
      <p>{completedCount} completed</p>
      <button
        type="button"
        onClick={clearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </section>
  );
}

export default TodoList;
