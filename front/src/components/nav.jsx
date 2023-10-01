import React from "react";
import '../style.css';
import Logo from '../img/argentBankLogo.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Icon = <FontAwesomeIcon icon={faUserCircle} className ="fa fa-user-circle"/>

function Nav() {
  return (
    <nav className="main-nav">
       <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
        {Icon} Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Nav;