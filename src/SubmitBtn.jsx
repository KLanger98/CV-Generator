import { useState } from "react";

function SubmitBtn({addItem}){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddItem = () =>{
        addItem(inputValue);
        setInputValue("");
    }


    return (
      <div className="submitInput">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="formBtn" onClick={handleAddItem}>
          Add
        </button>
      </div>
    );
}

export default SubmitBtn