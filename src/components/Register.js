import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Register = () => {
    const [mail, setMail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const signUp = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, mail, pass1)
        .then((userCredential) => {
          // Signed in           
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
          <form className="form-signin" onSubmit={signUp}>            
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <label className="sr-only d-none">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control my-2"
              placeholder="Email address"
              required
              autoFocus
              onChange={(e)=>setMail(e.target.value)}
            />
            <label className="sr-only d-none">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control my-2"
              placeholder="Password"
              onChange={(e)=>setPass1(e.target.value)}             
              required
            />
            <label className="sr-only d-none">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className={`form-control my-2 ${pass1===pass2?"":"is-invalid"}`}
              placeholder="Repeat password"
              onChange={(e)=>setPass2(e.target.value)}
              required
            />
            <button className={`btn btn-custom mt-3 ${pass1!==pass2?"disable":""}`} type="submit">
              Register
            </button>
          </form>
        </div>
          <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
