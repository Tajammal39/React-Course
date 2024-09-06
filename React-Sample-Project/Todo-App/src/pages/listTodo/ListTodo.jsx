import React, { useEffect, useState } from "react";
import style from "./ListTodo.module.css";
import { useParams } from "react-router-dom";
const ListTodo = () => {
  const { email } = useParams();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const tempUser = localStorage.getItem("userDetails");
    if (tempUser) {
      let loginUser = JSON.parse(tempUser);
      setUserEmail(loginUser.email);
    } else {
      setUserEmail(".......");
    }
  }, []);
  return (
    <div className={style.container}>
      <h1>My Todo({email})</h1>
      <form action="">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label htmlFor="todo">Enter your todo</label>
          <input type="text" name="todo" id="todo" />
        </div>
        <button>Add</button>
      </form>

      <div>
        <div>
          <div>
            <span>My Todo List</span>
            <span>1284*2021</span>
          </div>
          <div>
            <button>Edit</button>
            <button>Child</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
