import React, { Fragment } from 'react';
import Footer from './components/Footer'; 
import Nav from './components/nav';
import './style.css';

function SignIn() {
  return (
    <Fragment>
      <Nav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Fragment>
              <a href="./user.html" className="sign-in-button">Sign In</a>
              <button className="sign-in-button">Sign In</button>
            </Fragment>
          </form>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default SignIn;