import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ListTodo from "./pages/listTodo/ListTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="my-list" element={<ListTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
