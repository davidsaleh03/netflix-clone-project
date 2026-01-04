import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import SignIn from "../../components/SignInUp/SignIn";
import SignUp from "../../components/SignInUp/SignUp";
import SignUpBtn from "../../components/SignInUp/SignUpBtn";
import SignInBtn from "../../components/SignInUp/SignInBtn";


const Login = () => {
  const [log, setLog] = useState(false);

  function logIn() {
    setLog(prevLog => !prevLog);
  }

  return (
    <div className="login">
      <div className="login__area">
        <div className="login__area--top">
        <div className="login__top">
          <img src={Logo} alt="" className="login__img" />
          <div className="top__left">
          <select name="LanguageSelector" className="top__selector">
            <option>English</option>
          </select>
          { log ? <SignUpBtn onClick={logIn} /> : <SignInBtn onClick={logIn}/>}
          </div>
        </div>
        </div>
        { log ? <SignIn onClick={logIn}/> : <SignUp onClick={logIn}/>}
      </div>
    </div>
  );
};

export default Login;

