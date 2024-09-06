import React, { useState } from "react";
import style from "./Login.module.css";
import { json, useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const HandleForm = (e) => {
    e.preventDefault();
    const tempUser = localStorage.getItem("userDetails");
    if (tempUser) {
      let loginUser = JSON.parse(tempUser);
      if (
        loginUser.email === user.email &&
        loginUser.password === user.password
      ) {
        alert("Login Successfully match");
        navigate(`/my-list/${user.email}`);
      } else alert("Worng info");
    } else {
      localStorage.setItem("userDetails", JSON.stringify(user));
      alert("Successfully Register");
      navigate(`/my-list/${user.email}`);
    }
  };
  return (
    <div className={style.loginContainer}>
      <h1>
        My to <span>do list</span>
      </h1>
      <form onSubmit={HandleForm}>
        <label htmlFor="email">Email: {user.email}</label>
        <input
          type="email"
          value={user.email}
          required
          name="email"
          id="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password: {user.password}</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Login / Registration</button>
      </form>
    </div>
  );
};

export default Login;
