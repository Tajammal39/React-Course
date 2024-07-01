import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemContainer}>
      {todoItems.map((items) => (
        <TodoItem
          todoName={items.name}
          todoDate={items.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoItems;
