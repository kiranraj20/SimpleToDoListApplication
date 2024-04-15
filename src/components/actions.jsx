
// Define action types as constants
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action creator function to add a new todo item
export const addTodo = (text) => ({
  // Return an action object with type ADD_TODO
  type: ADD_TODO,
  // Include the text of the new todo item as payload
  payload: text,
});

// Action creator function to toggle the completion status of a todo item
export const toggleTodo = (index) => ({
  // Return an action object with type TOGGLE_TODO
  type: TOGGLE_TODO,
  // Include the index of the todo item to toggle as payload
  payload: index,
});

// Action creator function to delete a todo item
export const deleteTodo = (index) => ({
  // Return an action object with type DELETE_TODO
  type: DELETE_TODO,
  // Include the index of the todo item to delete as payload
  payload: index,
});
