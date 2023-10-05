import '../style.css';
import Account from '../components/account';
import { useSelector } from 'react-redux';
import EditUser from '../components/editUser';
import { useState } from 'react';

function User() {
  const { firstName, lastName, userName } = useSelector((state) => state.login);
  const [ showEditUser, updateShowEditUser ] = useState(false)
  
  return (
    <main className="main bg-dark">
        { !showEditUser ?
          <div className="header">
            <h1>Welcome back <br />{firstName} {lastName}!</h1>
            <button className="edit-button" onClick={() => { updateShowEditUser(true) }}>Edit Name</button>
          </div> :
          <div className="header">
            <EditUser firstName={firstName} lastName={lastName} userName={userName} updateShowEditUser={updateShowEditUser}/>
          </div>
        }
        <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" desc="Available Balance" />
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" desc="Available Balance" />
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" desc="Current Balance" />
    </main>
  );
}


export default User;