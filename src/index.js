import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routers from './router';
import { Route, Router } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> 
        < Routers/>
    </Provider>
   
); 
reportWebVitals();
