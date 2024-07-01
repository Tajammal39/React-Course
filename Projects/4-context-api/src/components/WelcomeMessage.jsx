import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";
function WelcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return todoItems.length === 0 && <p>Enjoy Your Day</p>;
}
export default WelcomeMessage;
