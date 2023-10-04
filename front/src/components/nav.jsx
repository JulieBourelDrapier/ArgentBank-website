import React, { Fragment } from "react";
import '../style.css';
import Logo from '../img/argentBankLogo.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Icon = <FontAwesomeIcon icon={faUserCircle} className ="fa fa-user-circle"/>

function Nav() {
  const {token: signIn, userName} = useSelector((state) => state.login)

  const logo = !!signIn ?
  <Fragment>
    <Link className="main-nav-item" to="/user">
      {Icon} {userName}
    </Link>
    <Link className="main-nav-item" to="/">
      {Icon} Sign out
    </Link>
  </Fragment>
  : <Link className="main-nav-item" to="/sign-in">
    {Icon} Sign In
  </Link>

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
        {logo}
      </div>
    </nav>
  );
}

export default Nav;