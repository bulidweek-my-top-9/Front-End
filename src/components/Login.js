import React, { useState } from "react";
import { login } from "../actions";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  handleChanges = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  login = event => {
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
      <div>Welcome to Top 9!</div>;
      <div className="create-account-header">CREATE ACCOUNT</div>
      <button>Create Account</button>
      <form>
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
  error: state.user.error,
  fetching: state.user.fetching
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
