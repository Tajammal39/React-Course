import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleClickButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
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
