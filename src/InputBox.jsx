

function InputBox({ id, placeholder, type, onInputChange, value}) {
 const handleChange = (e) => {
    const inputValue = e.target.value;
    onInputChange(id, inputValue)
 }

  return (
    <div className="inputBoxGroup">
        <input 
        type={type} 
        placeholder={placeholder} 
        id={id} 
        name={id}
        onChange={handleChange} 
        value={value}
        ></input>
    </div>
  );
}

export default InputBox;
