import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login.slice";
// METTRE DEVTOOLS FALSE AVANT MISE EN PROD
const store = configureStore({
  reducer: {
    login: loginReducer},
    devTools :  true
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


