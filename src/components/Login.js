import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useEffect, useState} from "react";
import {auth} from './firebase'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const signIn = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth,mail,pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                sessionStorage.setItem('city-tranit', userCredential)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Error: "+errorCode+" "+errorMessage)
            });
    }

  return (
    <div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center">
      <div
        className="col-md-6 col-lg-4 wow bounceInUp"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="c-box">
          <div className="c-icon" style={{ background: "#fceef3" }}>
            <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
          </div>
          <form className="form-signin" onSubmit={signIn}>            
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <label className="sr-only d-none">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control my-2"
              placeholder="Email address"
              required
              onChange={(e)=>setMail(e.target.value)}
              autoFocus
            />
            <label className="sr-only d-none">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control my-2"
              placeholder="Password"
              onChange={(e)=>setPass(e.target.value)}
              required
            />
            <button className="btn btn-custom mt-3" type="submit">
              Login
            </button>
          </form>
        </div>
          <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
