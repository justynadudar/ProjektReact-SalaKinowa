import React, {useState} from 'react'

function AddFilm({
    handleClick
}) {
    let [textInput, setTextInput] = useState("");
    //let [numberInput, setNumberInput] = useState(0);

function changeText(e){
     setTextInput(e.target.value)
}
// function changeNumber(e){
//     setNumberInput(e.target.value)
// }
    
    return (
      <div>
          <input type = "text" value={textInput} onChange={changeText}/>
          <input type = "number"/>
          <button onClick={() => handleClick(textInput)}>Dodaj</button>
      </div>
    );
  }
  
  export default AddFilm;