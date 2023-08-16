import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";

function App() {
//This will hold the list of tasks.
  const [items, setItems] = useState([]); 

//fetch the tasks from the server (when the app starts)
  useEffect(() => {
    fetchTasks();
  }, []);
// responsible for making a GET request to the /api/tasks endpoint on the backend. 
//It retrieves the list of tasks and updates the items state with the fetched data.
  function fetchTasks() {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching your list of task:", error));
  }

  function handleClick(input) {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]);
      })
      .catch((error) => console.error("Error adding task:", error));
  }
  function handleEdit(id, newText) {
    fetch(`/api/tasks/${id}`, {
      method: "PUT",
    })
      .then((response) => {
        const updatedItems = items.map((item) => {
          if (item._id === id) {
            return { ...item, text: newText };
          }
          return item;
        });
        setItems(updatedItems);
      })
      .catch((error) => console.error("Error editing task:", error));
  }
  function handleDelete(id) {
    fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedItems = items.filter((item) => item._id !== id);
        setItems(updatedItems);
      })
      .catch((error) => console.error("Error deleting task:", error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-do List</h1>
      </header>
      <InputArea onAdd={handleClick} />
      <div className="App-list">
        <ul>
          {items.map((todoItem) => (
            <TodoItems
              key={todoItem._id}
              id={todoItem._id}
              text={todoItem.text}
              onChecked={handleDelete}
              onEdit={handleEdit}

            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;