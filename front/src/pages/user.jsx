import React, { Fragment } from 'react';
import '../style.css';
import Account from '../components/account';

function User() {
  return (
    <body>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back <br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" desc="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" desc="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" desc="Current Balance" />
      </main>
    </body>
  );
}

export default User;