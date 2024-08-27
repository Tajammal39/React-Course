import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItem = [
    { name: "Buy Milk", dueDate: "04/10/2024" },
    { name: "Go to College", dueDate: "05/10/2024" },
    { name: "Click to new Video", dueDate: "06/10/2024" },
  ];

  const [todoItems, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date;${itemDueDate}`);

    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItem);
  };

  const handleDeleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
