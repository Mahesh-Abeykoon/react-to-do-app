import React,{useState} from "react"

function InputArea(props){

    const [input, setInput] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInput(newValue);
            }
    return(
        <div className="form">
            <input type="text"  onChange={handleChange} value={input}/>
            <button 
                onClick={()=>{
                    props.onAdd(input)
                    setInput("")
                }}
                >
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;