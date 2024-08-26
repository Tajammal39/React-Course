import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((items) => (
        <TodoItem todoName={items.name} todoDate={items.dueDate} />
      ))}
    </div>
  );
};
export default TodoItems;
