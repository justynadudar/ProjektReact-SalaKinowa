import React, { useState } from "react";
import "./style/AddFilm.css";

function AddFilm({ handleClick }) {
    let [textInput, setTextInput] = useState("");
    //let [numberInput, setNumberInput] = useState(0);

    function changeText(e) {
        setTextInput(e.target.value);
    }

    return (
        <div className="AddFilm">
            <div>
                {/* <input type="text" value={textInput} onChange={changeText} /> */}
                <h2>Dodaj film:</h2>
                <label htmlFor="title">Tytuł:</label>
                <input
                    type="text"
                    name="title"
                    value={textInput}
                    onChange={changeText}
                />
                <label htmlFor="duration">Czas trwania:</label>
                <input
                    type="number"
                    name="duration"
                    value={textInput}
                    onChange={changeText}
                />
                <label htmlFor="duration">Adres url plakatu:</label>
                <input
                    type="number"
                    name="duration"
                    value={textInput}
                    onChange={changeText}
                />
                <button onClick={() => handleClick(textInput)}>Dodaj</button>
            </div>
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
