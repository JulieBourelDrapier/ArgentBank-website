import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginThunk as login, profileThunk as profile } from '../slices/login.slice';
import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { useAppDispatch } from '..';


const Icon = <FontAwesomeIcon icon={ faUserCircle } className ="fa fa-user-circle sign-in-icon"/>

function SignIn() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    const result = await dispatch(login({email: data.username, password: data.password}));
    if (typeof result.payload === "string") {
      await dispatch(profile(result.payload));
      navigate("/user");
    } else {
      setError("Email and/or password incorrect");
    }
  }

  return (
 
      <main className="main bg-dark">
        <section className="sign-in-content">
        {Icon}
          <h1>Sign In</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="password">Username</label>
              <input {...register("username", { required: true })} type="username" autoComplete="off" />
            {errors?.username && <div className="error">Email is required</div>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
            <input {...register("password", { required: true })} id="password" type="password" autoComplete="off"/>
            {errors?.password && <div className="error">Password is required</div>}
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" {...register("remember")} />
            </div>
            <button type="submit" className="sign-in-button">Sign in</button>
          </form>
        </section>
      </main>
 
  );
}
export default SignIn;
