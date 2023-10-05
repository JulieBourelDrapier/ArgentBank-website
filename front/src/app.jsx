import React, { Fragment } from 'react';
import './style.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// REDUX
import { useSelector } from "react-redux";
// Components
import Nav from './components/nav';
import Home from './pages/home';
import SignIn from './pages/signIn';
import User from './pages/user';
import Footer from './components/footer';

function App() {
  const { loggedIn } = useSelector((state) => state.login);

  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={
          loggedIn ? (
            <User />
          ) : (
            <Navigate replace to={"/sign-in"} />
          )
        } />
      </Routes>
      <Footer />
    </Fragment>
  );
};
export default App;