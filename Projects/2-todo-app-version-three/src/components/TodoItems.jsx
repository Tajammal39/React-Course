import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((items) => (
        <TodoItem
          todoName={items.name}
          todoDate={items.dueDate}
          deleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
