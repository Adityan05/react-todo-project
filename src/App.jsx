import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Task from "./components/Task";

const App = () => {
  const [add, setAdd] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    setTodos((prev) => {
      const newTodos = [...prev, add];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    setAdd("");
  };
  const deleteTask = (idx) => {
    setTodos((prev) => {
      const updatedTodos = prev.filter((_, i) => i !== idx);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };
  useEffect(() => {
    const setExistingTodos = () => {
      const items = localStorage.getItem("todos");
      if (items) {
        setTodos(JSON.parse(items));
      }
    };
    setExistingTodos();
  }, []);

  return (
    <div className="app">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="add-section">
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          placeholder="Task..."
          spellCheck={false}
          autoFocus={true}
        />
        <button title="Add Task" onClick={handleClick}>
          <IoMdAdd />
        </button>
      </div>
      <div className="list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Task
              key={index}
              text={todo}
              deleteTask={() => deleteTask(index)}
            />
          )) // Make sure to return this
        ) : (
          <h2 style={{ textAlign: "center" }}>No Todo</h2>
        )}
      </div>
    </div>
  );
};

export default App;
