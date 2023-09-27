import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Icon = <FontAwesomeIcon icon={faUserCircle} className ="fa fa-user-circle sign-in-icon"/>

function SignIn() {
  return (
    <body>
    <main className="main bg-dark">
        <section className="sign-in-content">
        {Icon}
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
         
            <Link className="sign-in-button" to="/user">Sign In</Link>
          </form>
        </section>
      </main>
      </body>
  );
}

export default SignIn;