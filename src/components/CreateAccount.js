import React, { useState } from "react";
import { connect } from "react-redux";
import { createAccount } from "../actions";
import styled from "styled-components";

const CreatePgBtn = styled.button`
background-color: #053868;
color: #EDF5E1;
border-radius: 1.5rem;
width: 13rem;
height: 3rem;
margin: 1rem;
border: none;
font-size: 1.5rem;

`

const CreateAccount = props => {
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

  const createAccount = event => {
    console.log("create account event", event);
    event.preventDefault();
    props.createAccount(credentials);
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div className="Login">
      <h1>Get Top 9</h1>
      <form onSubmit={createAccount}>
        <label htmlFor="username">username
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        /> </label>
        <label htmlFor="password">password
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        /></label>
        <CreatePgBtn>Create Account</CreatePgBtn>
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
  { createAccount }
)(CreateAccount);
