import React, { useState }from "react";
import '../style.css';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { editUserThunk as editUser } from '../slices/login.slice';
function EditUser({ firstName, lastName, userName, updateShowEditUser }) {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const onSubmit = async (data) => {
    const result = await dispatch(editUser({userName: data.userName, token }));
    if (typeof result.payload === "object") {
      updateShowEditUser(false)
    } else {
      setError("Username incorrect");
    }
  }

  return (
    <div>
      <h1>Edit User</h1>
      {error && <div className="error">{error}</div>}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input-wrapper">
          <label htmlFor="userName">UserName :</label>
          <input {...register("userName", { required: true })} id="userName" type="text" autoComplete="off" placeholder={userName}/>
        {errors?.userName && <div className="error">User is required</div>}
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="firstName">FirstName :</label>
        <input {...register("firstName", { required: true, disabled:true })} id="firstName" type="firstName" autoComplete="off" value={firstName}/>
        {errors?.firstName && <div className="error">FirstName is required</div>}
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="lastName">lastName :</label>
        <input {...register("lastName", { required: true, disabled:true })} id="lastName" type="lastName" autoComplete="off" value={lastName}/>
        {errors?.lastName && <div className="error">LastName is required</div>}
        </div>
        <div className="form-buttons">
        <button type="submit" className="form-sign-in-button">Save</button>
        <button type="button" className="form-sign-in-button" onClick={() => updateShowEditUser(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;