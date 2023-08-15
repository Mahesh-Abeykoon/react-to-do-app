import React from "react";

function TodoItems(props) {
  return (
    <div>
      <li>
        {props.text}
        <button onClick={() => props.onChecked(props.id)}>Delete</button>
      </li>
    </div>
  );
}

export default TodoItems;
