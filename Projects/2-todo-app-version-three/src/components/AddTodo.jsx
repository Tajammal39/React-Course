import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleClickButton = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleClickButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
