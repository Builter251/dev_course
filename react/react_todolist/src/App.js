import React, { useState } from 'react';
import TodoList from './components/ToDoList.jsx';
import InputForm from './components/InputForm';
import './App.css';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  const saveTodosToLocalStorage = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    saveTodosToLocalStorage(updatedTodos);
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? updatedTodo : todo
    );
    saveTodosToLocalStorage(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    saveTodosToLocalStorage(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodosToLocalStorage(updatedTodos);
  };

  const checkAlarms = () => {
    const now = new Date().getTime();
    todos.forEach((todo, index) => {
      if (todo.completed || todo.alerted) {
        return;
      }
      if (todo.alarm && new Date(todo.alarm).getTime() <= now) {
        editTodo(index, { ...todo, alerted: true });
        alert(`알람: ${todo.text}`);
      }
    });
  };

  setInterval(checkAlarms, 1000);

  return (
    <div className="App">

      <main>
        <InputForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
}

export default App;
