import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
=======
>>>>>>> ad197ea7e2b221208e3d6fcb9412238363a2ba98
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import customTheme  from './extendTheme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
