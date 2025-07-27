import React from "react";
import "./login.css";
import illustration from "../assets/illustration.svg"; 

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="right-side">
        <div className="form_login">
        <h2>LOG IN</h2>
        <form className="login-form">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
