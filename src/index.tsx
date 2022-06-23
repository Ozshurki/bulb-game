import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";

const container:any = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

);