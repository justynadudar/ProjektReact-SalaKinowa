import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/AddFilm.css";

function AddFilm({ addFilm, films }) {
    let [textInput, setTextInput] = useState("");
    let [urlInput, setUrlInput] = useState("");
    let [numberInput, setNumberInput] = useState("");

    function addFilmToFilmList() {
        const id = films.id;
        console.log(films);
        const newFilm = {
            id: id,
            title: textInput,
            duration: numberInput,
            imgUrl: urlInput,
            showings: [],
        };
        addFilm(newFilm);

        setTextInput("");
        setNumberInput("");
        setUrlInput("");
    }

    function changeText(e) {
        setTextInput(e.target.value);
    }

    function changeNumber(e) {
        setNumberInput(e.target.value);
    }

    function changeUrl(e) {
        setUrlInput(e.target.value);
    }

    return (
        <div className="AddFilm">
            <div>
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
                    value={numberInput}
                    onChange={changeNumber}
                />
                <label htmlFor="url">Adres url plakatu:</label>
                <input
                    type="text"
                    name="url"
                    value={urlInput}
                    onChange={changeUrl}
                />
                <button onClick={addFilmToFilmList}>
                    <Link to="/films">Dodaj</Link>
                </button>
            </div>
        </div>
    );
}

export default AddFilm;
