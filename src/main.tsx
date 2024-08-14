import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoApp } from './ToDoApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoApp></ToDoApp>
  </React.StrictMode>,
)