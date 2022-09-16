import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import store from './redux/store';
import { productReducer } from './redux/reducers/productReducer';

const appStore = createStore(productReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store= {appStore}>
    <App />
    </Provider>
    </BrowserRouter>
);

