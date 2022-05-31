import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from '../../components/base/Button/buttonLogin'
import ButtonPrimary from '../../components/base/Button/buttonPrimary'
import InputLogin from "../../components/base/Input/inputLogin";
import Logo from "../../components/base/logo";
import "./login.css";

const LoginCustomer = () => {
  return (
    <div className="warpper">
      <div>
        <Logo width='30px' height='40px' fontSize='28px'/>
      </div>
      <div className="formWarpper">
        <p className="content">Please login with your account</p>
        <div class="d-flex justify-content-center">
          <ButtonLogin title="COSTUMER" textColor='#9B9B9B' onClick={<Link to='./loginCustomer.js'></Link> }/>
          <ButtonLogin title="SELLER" bgColor='#DB3022' textColor='#FFFFFF' onClick={<Link to='./loginSeller.js'></Link>}/>
        </div>
        <InputLogin type='text' placeHolder='Name'/>
        <InputLogin type='password' placeHolder='Password'/>
        <p className="forgotPassword">Forgot Password?</p>
        <ButtonPrimary title="PRIMARY" textColor='#FFFFFF'/>
        <p className="content2">Don't have a Tokopedia account? <span>Register</span></p>
      </div>
    </div>
  );
};

export default LoginCustomer;