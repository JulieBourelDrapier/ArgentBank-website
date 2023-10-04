import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { Fragment } from "react";
import '../style.css';
import Logo from '../img/argentBankLogo.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Icon = <FontAwesomeIcon icon={faUserCircle} className ="fa fa-user-circle"/>
const IconOut = <FontAwesomeIcon icon={faRightFromBracket} className ="fa fa-right-from-bracket"/>


function Nav() {
  const {token: signIn, userName} = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function signOut(event) {
    event.preventDefault();
    dispatch(signOut());
    navigate("/");
  }
  

  const logo = !!signIn ?
  <Fragment>
    <Link className="main-nav-item" to="/user">
      {Icon} {userName}
    </Link>
    <Link className="main-nav-item" to="/" onClick={() => dispatch(signOut())}>
      {IconOut} Sign Out
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