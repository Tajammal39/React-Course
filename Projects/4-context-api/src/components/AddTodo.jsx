import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo({ onNewItem }) {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleClickButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container ">
      <form action="" onSubmit={handleClickButton}>
        <div className="row kg-row">
          <div className="col-5">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-success kg-button">
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
