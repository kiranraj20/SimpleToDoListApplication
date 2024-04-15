import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './/components/TodoForm'; // Importing the TodoForm component
import TodoList from './/components/TodoList'; // Importing the TodoList component
import { addTodo, toggleTodo, deleteTodo } from './/components/actions'; // Importing action creators from actions.js
import './App.css'; // Importing CSS file for styling

// App component
const App = () => {
  // Using useSelector hook to get the todos array from the Redux store
  const todos = useSelector(state => state.todos);
  
  // Using useDispatch hook to get access to the dispatch function
  const dispatch = useDispatch();

  // Function to handle adding a new todo item
  const handleAddTodo = (text) => {
    // Dispatching the addTodo action with the text of the new todo item
    dispatch(addTodo(text));
  };

  // Function to handle toggling the completion status of a todo item
  const handleToggleTodo = (index) => {
    // Dispatching the toggleTodo action with the index of the todo item to toggle
    dispatch(toggleTodo(index));
  };

  // Function to handle deleting a todo item
  const handleDeleteTodo = (index) => {
    // Dispatching the deleteTodo action with the index of the todo item to delete
    dispatch(deleteTodo(index));
  };

  // Rendering the Todo App UI
  return (
    <div className='container'> {/* Container div for styling */}
      <h1>Todo App</h1> {/* Header */}
      {/* Rendering TodoForm component and passing handleAddTodo function as prop */}
      <TodoForm addTodo={handleAddTodo} />
      {/* Rendering TodoList component and passing todos, handleToggleTodo, and handleDeleteTodo functions as props */}
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App; // Exporting the App component
