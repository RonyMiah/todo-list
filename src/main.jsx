import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import TodoProvider from './Context/todoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoProvider>
        <App />
      </TodoProvider>f
    </ChakraProvider>
  </React.StrictMode>
);
