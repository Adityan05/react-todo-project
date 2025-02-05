import React from "react";
import "../css/task.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Task = ({ text, deleteTask }) => {
  return (
    <div className="task">
      <IoIosCheckmarkCircleOutline
        id="tick"
        title="Task Done"
        onClick={deleteTask}
      />
      <p>{text}</p>
    </div>
  );
};

export default Task;
