import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ListContextProvider} from "./listContext"

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


