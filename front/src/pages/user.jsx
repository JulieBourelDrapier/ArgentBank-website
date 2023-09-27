import React, { Fragment } from 'react';
import '../style.css';
import Account from '../components/account';

function User() {
  return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back\nTony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
       <Account />
       <Account />
       <Account />
      </main>
  );
}

export default User;