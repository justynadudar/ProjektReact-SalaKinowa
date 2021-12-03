import React, { useState } from "react";

function AddFilm({ handleClick }) {
    let [textInput, setTextInput] = useState("");
    //let [numberInput, setNumberInput] = useState(0);

    function changeText(e) {
        setTextInput(e.target.value);
    }

    return (
        <div>
            <input type="text" value={textInput} onChange={changeText} />
            <input type="number" />
            <button onClick={() => handleClick(textInput)}>Dodaj</button>
        </div>
    );
}

export default AddFilm;

// const request = new Request({
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//     body: JSON.stringify({
//         id: 3,
//         title: "John Smith",
//         duration: 110,
//         imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/20/22/vintage-1706242_960_720.jpg",
//         dates:  [],
//         cinemaHallId: null
//     })
// });
// function changeNumber(e){
//     setNumberInput(e.target.value)
// }
