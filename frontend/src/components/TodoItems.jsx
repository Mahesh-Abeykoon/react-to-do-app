import React from "react";

function TodoItems(props) {
  return (
    <div>
      <li>
        <span className="task-text">{props.text}</span>
        <button className="delete-button"  onClick={() => props.onChecked(props.id)}>X</button>
      </li>
    </div>
  );
}

export default TodoItems;
