import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3000/";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
);

