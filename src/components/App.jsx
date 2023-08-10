
import React, { useState } from "react"

function App() {

  const [input, setInput] = useState("");
  const [item, addItem] = useState([]);


  function handleChange(event){
    const newValue = event.target.value;
    setInput(newValue);
      }

  function handleClick(){
    addItem((prevItem)=>{
      return [...prevItem, input]
    })
    setInput("")
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>My To-do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {item.map(todoItems=> <li>{todoItems}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;