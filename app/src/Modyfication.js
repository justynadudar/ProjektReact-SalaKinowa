import React, { useState } from "react";
import "./style/AddFilm.css";

function Modyfication({ films, addShowing, newShowing }) {
  let [textInput, setTextInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [timeInput, setTimeInput] = useState("");

  function changeText(e) {
    setTextInput(e.target.value);
  }
  function changeDate(e) {
    setDateInput(e.target.value);
  }
  function changeTime(e) {
    setTimeInput(e.target.value);
  }

  return (
    <div className="AddFilm">
      <div>
        <h2>Dodaj seans:</h2>
        <label htmlFor="title">Film:</label>
        <input
          type="text"
          list="films"
          name="title"
          value={textInput}
          onChange={changeText}
        />
        <datalist id="films">
          {films.loaded
            ? films.data.map((film) => <option>{film.title}</option>)
            : null}
        </datalist>
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
        <button onClick={() => addShowing(textInput, dateInput, timeInput)}>
          Dodaj
        </button>
      </div>
    </div>
  );
}

export default Modyfication;
