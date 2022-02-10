import React, { useState } from "react";
import PropTypes from "prop-types";
// import "./Login.css";
import { login } from "../api/Api";
/****************************************************** */
export default function Login({ setToken, setLoggedUser }) {
  // const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  /****************************************************** */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      console.log("res", res.data.user.name);
      setToken(res.data.token);
      const a = res.data.user; // ←user
      //check if is admin and if it dose set isAdmin
      console.log("isAdmin", a.isAdmin);
      console.log("a", a);
      setLoggedUser(a);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  /********************************************************** */

  return (
    <div className="login-wrapper">
      <h1>Sign in </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
        </label>
        <div className="ui left icon input">
          <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
          <i className="user icon"></i>
        </div>

        <label>
          <p>Password</p>
        </label>
        <div className="ui left icon input">
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <i className="lock icon"></i>
        </div>
        <div>
          <button className="ui blue submit button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
