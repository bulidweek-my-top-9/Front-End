import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import styled from "styled-components";

const BtnCreate = styled.button`
background-color: #053868;
color: #EDF5E1;
border-radius: 1.5rem;
width: 20%;
height: 3rem;
margin: 1rem;
font-size: 1.6rem;

`
const BtnLogin = styled.button`
background-color: #053868;
color: #EDF5E1;
border-radius: 1.5rem;
width: 9rem;
height: 2rem;
margin: 1rem;
border: none;

`

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    console.log("login event", event);
    event.preventDefault();
    props.login(credentials);
    // use .then to push to page once hooked up
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <div className="welcome-header">Welcome to Top 9!</div>
      <div className="create-account-header">CREATE ACCOUNT</div>
      <BtnCreate
        onClick={() => {
          props.history.push("/create");
        }}
      >
        Create Account
      </BtnCreate>
      <form onSubmit={login}>
        <label htmlFor="username"> username
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        /> </label>
        <label htmlFor="password"> password
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        /> </label>
        <BtnLogin>Login</BtnLogin>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  // error: state.user.error,
  // fetching: state.user.fetching
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
