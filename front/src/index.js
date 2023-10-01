import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// REDUX
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login.slice";

 
import Nav from './components/nav';
import Home from './pages/home';
import SignIn from './pages/signIn';
import User from './pages/user';
import Footer from './components/footer';

// METTRE DEVTOOLS FALSE AVANT MISE EN PROD
const store = configureStore({
  reducer: {
    login: loginReducer},
    devTools :  true
});

export const useAppDispatch = () => useDispatch()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
      </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
)


