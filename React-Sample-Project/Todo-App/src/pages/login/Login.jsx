import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <h1>
        My to <span>do list</span>
      </h1>
      <form action="" method="get">
        <label htmlFor="email">Email</label>
        <input type="email" required name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>Login / Registration</button>
      </form>
    </div>
  );
};

export default Login;
