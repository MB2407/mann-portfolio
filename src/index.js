import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards/Cards';
import { Header } from 'react-mdl';

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
