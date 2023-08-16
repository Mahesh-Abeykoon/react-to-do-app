import React,{useState} from "react";

function TodoItems(props) {
   const [isEditing, setIsEditing] = useState(false);
   const [editedText, setEditedText] = useState(props.text);
 
   const handleEditClick = () => {
     setIsEditing(true);
   };
 
   const handleEditChange = (event) => {
     setEditedText(event.target.value);
   };
 
   const handleSaveClick = () => {
     setIsEditing(false);
     props.onEdit(props.id, editedText);
   };

   const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(props.text); 
  };
  
  return (
    <div>
      <li>
        <div >
          {isEditing ? (
                    <div className="edit-mode">
                      <input
                        className="edit-text"
                        type="text"
                        value={editedText}
                        onChange={handleEditChange}
                      />
                      <div className="edit-buttons">
                        <button className="save-button" onClick={handleSaveClick}>Save</button>
                        <button className="cancel-button"onClick={handleCancelClick}>Cancel</button>
                      </div>
                      </div>
                  ) : (
                    <>
                      <button className="edit" onClick={handleEditClick}>
                        {props.text}
                      </button>
                    </>
                  )}
        </div>
          {/* {
            isEditing ? ( null )
          : ( <button className="delete-button"  onClick={() => props.onChecked(props.id)}>X</button> )
          } */}
           {!isEditing && (
          <button
            className="delete-button"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this task?")) {
                props.onChecked(props.id);
            } 
          }}> X </button>
        )}
      </li>
    </div>
  );
}

export default TodoItems;
