import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/App.css";
// import App from './App';
import { RouterProvider_ } from './routes/RoutesProvider';


const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
    <RouterProvider_ />
);

