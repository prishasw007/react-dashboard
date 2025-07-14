import React, { useState } from 'react';
import './ToDoList.css'; // styling

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleAddTodo() {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  }

  function toggleComplete(id) {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }

  function deleteTodo(id) {
    const updated = todos.filter(todo => todo.id !== id);
    setTodos(updated);
  }

  return (
    <div className="todo-list">
      <h2>📝 Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
