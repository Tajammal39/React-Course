import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItem = [
    { name: "Buy Milk", dueDate: "04/10/2024" },
    { name: "Go to College", dueDate: "05/10/2024" },
    { name: "Click to new Video", dueDate: "06/10/2024" },
    { name: "Click to new Video", dueDate: "07/10/2024" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItem} />
    </center>
  );
}

export default App;
