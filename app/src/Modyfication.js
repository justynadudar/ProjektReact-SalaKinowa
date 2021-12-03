import React, { useState } from "react";
import "./style/AddFilm.css";

function Modyfication({ addShowing }) {
    let [textInput, setTextInput] = useState("");
    let [dateInput, setDateInput] = useState("");
    let [timeInput, setTimeInput] = useState("");
    //let [numberInput, setNumberInput] = useState(0);

    function changeText(e) {
        setTextInput(e.target.value);
    }
    function changeDate(e) {
        setDateInput(e.target.value)
    }
    function changeTime(e) {
        setTimeInput(e.target.value);
    }

    return (
        <div className="AddFilm">
            <div>
                <h2>Dodaj seans:</h2>
                <label htmlFor="title">Tytuł:</label>
                <input
                    type="text"
                    name="title"
                    value={textInput}
                    onChange={changeText}
                />
                <label htmlFor="date">Data:</label>
                <input
                    type="date"
                    name="date"
                    value={dateInput}
                    onChange={changeDate}
                />
                <label htmlFor="time">Godzina:</label>
                <input
                    type="time"
                    name="hour"
                    value={timeInput}
                    onChange={changeTime}
                />
                <button onClick={() => addShowing(textInput, dateInput, timeInput)}>Dodaj</button>
            </div>
        </div>
    );
}

export default Modyfication;