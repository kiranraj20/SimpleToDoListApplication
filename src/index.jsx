// Import necessary dependencies for configuring Redux store and rendering React components
import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore function from Redux Toolkit for creating Redux store
import { Provider } from 'react-redux'; // Importing Provider component from React Redux for providing Redux store to React components
import React from 'react'; // Importing React library
import ReactDOM from 'react-dom'; // Importing ReactDOM library for rendering React components to the DOM
import App from './App'; // Importing the main App component
import reducer from './/components/reducer'; // Importing the reducer function responsible for managing Redux state

// Configure Redux store using configureStore function from Redux Toolkit
const store = configureStore({
  reducer: reducer, // Pass the reducer function to configureStore to manage state
});

// Render the main App component wrapped in a Provider component, which provides the Redux store to all components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Mount the rendered component to the root element in the HTML document
);
