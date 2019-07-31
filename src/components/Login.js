import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

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
    console.log("login credentials", credentials);
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
      <div>Welcome to Top 9!</div>
      <div className="create-account-header">CREATE ACCOUNT</div>
      <button
        onClick={() => {
          props.history.push("/create");
        }}
      >
        Create Account
      </button>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Login</button>
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
