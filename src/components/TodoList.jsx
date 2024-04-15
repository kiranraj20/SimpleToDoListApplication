import React from 'react';

// TodoList component takes three props: todos, toggleTodo, and deleteTodo
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    // Render a <ul> element to display the todo list
    <ul>
      {/* Map over the todos array to render each todo item */}
      {todos.map((todo, index) => (
        // Each todo item is rendered as an <li> element with a unique key attribute
        <li key={index} 
          // Apply inline styles to control text decoration based on completion status
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', overflowWrap: 'break-word'}}>
          {/* Render the todo text as a <span> element */}
          <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          {/* Render a 'Delete' button for each todo item */}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
