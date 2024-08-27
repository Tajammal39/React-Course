import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const [todoItems, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date;${itemDueDate}`);

    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItem);
  };

  const deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItem(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
