
// Import action types from actions.js
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

// Load state from local storage
const storedTodos = localStorage.getItem('todos');
// Initialize the state with todos from local storage if available, or an empty array otherwise
const initialState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
};

// Define the reducer function to handle actions and update the state
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      // Add a new todo item to the list with the provided text and mark it as incomplete
      newState = {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
      break;
    case TOGGLE_TODO:
      // Toggle the completion status of a todo item based on the provided index
      newState = {
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
      break;
    case DELETE_TODO:
      // Remove a todo item from the list based on the provided index
      newState = {
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
      break;
    default:
      // If the action type is not recognized, return the current state
      newState = state;
  }

  // Save the updated todos to local storage
  localStorage.setItem('todos', JSON.stringify(newState.todos));

  // Return the new state after handling the action
  return newState;
};

// Export the reducer function to be used in the Redux store
export default reducer;
