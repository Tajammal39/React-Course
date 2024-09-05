import React from "react";
import style from "./ListTodo.module.css";
const ListTodo = () => {
  return (
    <div class={style.container}>
      <h1>My Todo</h1>
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
