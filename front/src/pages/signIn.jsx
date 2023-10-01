import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginThunk as login } from '../slices/login.slice';
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
    console.log(data);
    const result = await dispatch(login({email: data.username, password: data.password}));
    console.log(result)
    if (result === "fulfilled") {
      navigate("/user");
    } else {
      setError("un problème est survenu");
    }
  }

  return (
    <body>
      <main className="main bg-dark">
        <section className="sign-in-content">
          {Icon}
          <h1>Sign In</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <input {...register("username", { required: true })} />
              {errors.username && <span> Nom d'utilisateur incorrect</span>}
            </div>
            <div className="input-wrapper">
            <input {...register("password", { required: true })} />
              {errors.password && <span> Password incorrect</span>} 
            </div>
            
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" {...register("remember")} />
            </div>
            <button type="submit">Sign in</button>
          </form>
        </section>
      </main>
    </body>
  );
}
export default SignIn;
