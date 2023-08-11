import React, { useState } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";

function App() {

  const [item, addItem] = useState([]);

  function handleClick(input){
    addItem((prevItem)=>{
      return [...prevItem, input]
    })
  }

  function handleDelete(id){
    addItem((prev)=>{
      return prev.filter((item, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-do List</h1>
      </header>
      <InputArea onAdd={handleClick} />
      <div className="App-list">
        <ul>
         {item.map((todoItem, index) => (
         <TodoItems 
            key={index} 
            id={index}
            text={todoItem}
            onChecked={handleDelete}
          />
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App;