import React from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__area">
        <div className="login__area--top">
        <div className="login__top">
          <img src={Logo} alt="" className="login__img" />
          <select name="LanguageSelector" className="top__selector">
            <option>English</option>
          </select>
        </div>
        </div>
        <div className="login__form">
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <div className="form__help">
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
