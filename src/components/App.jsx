
import React from "react"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>My To-do List</h1>
      </div>

      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;