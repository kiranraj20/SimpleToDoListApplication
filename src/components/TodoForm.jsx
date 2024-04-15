import React, { useState } from 'react';

// TodoForm component definition
const TodoForm = ({ addTodo }) => {
  // Define state for the input text
  const [text, setText] = useState('');

  // Event handler for input change
  const handleChange = (e) => {
    // Update the text state with the value entered in the input
    setText(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Check if the text is empty or contains only whitespace
    if (!text.trim()) return;
    // Call the addTodo function passed as props with the text as payload
    addTodo(text);
    // Clear the input field by resetting the text state
    setText('');
  };

  // Render the TodoForm component
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering todo text */}
      <input type="text" value={text} onChange={handleChange} />
      {/* Button to submit the todo */}
      <button type="submit">Add Todo</button>
    </form>
  );
};

// Export the TodoForm component
export default TodoForm;
