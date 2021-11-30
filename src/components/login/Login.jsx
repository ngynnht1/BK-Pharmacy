import React, { useState, useCallback } from "react";
import "./Login.css";
import { useSpring, animated } from "react-spring";
import { useDispatch } from 'react-redux'
import { loginAction, signupAction } from "../../redux/authentication/actions";

function Login() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <LoginForm style={loginProps} />
        <RegisterForm style={registerProps} />
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        {/* <a herf="#">Forgot your password</a> */}
      </animated.div>
    </div>
  );
}

function LoginForm({ style }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(loginAction(email, password));
  }, [dispatch, email, password]);

  return (
    <animated.form
      id="loginform"
      style={style}
      onSubmit={onHandleSubmit}
    >
      <label for="username">USERNAME</label>
      <input
        type="text"
        id="username"
        value={email}
        onChange={onChangeEmail}
      />
      <label for="password">PASSWORD</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onChangePassword}
      />
      <input type="submit" value="submit" className="submit" />
    </animated.form>
  );
}

function RegisterForm({ style }) {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  }

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(signupAction(
      name,
      email,
      password,
      phone,
      address,
    ));
  }, [dispatch, name, email, password, phone, address]);

  return (
    <animated.form
      id="registerform"
      style={style}
      onSubmit={onHandleSubmit}
    >
      <label for="fullname">Full name</label>
      <input
        type="text" 
        id="fullname"
        value={name}
        onChange={onChangeName}
      />
      <label for="email">Email</label>
      <input 
        type="text" 
        id="email"
        value={email}
        onChange={onChangeEmail}
      />
      <label for="password">Password</label>
      <input 
        type="password"
        id="password"
        value={password}
        onChange={onChangePassword}
      />
      <label for="confirmpassword">Confirm Password</label>
      <input
        type="password" 
        id="confirmpassword"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
      />
      <label for="phone">Số điện thoại liên lạc</label>
      <input 
        type="text" 
        id="phone"
        value={phone}
        onChange={onChangePhone}
      />
      <label for="address">Thông tin địa chỉ</label>
      <input
        type="text" 
        id="address" 
        value={address}
        onChange={onChangeAddress}
      />
      <input type="submit" value="submit" class="submit" />
    </animated.form>
  );
}

export default Login;
