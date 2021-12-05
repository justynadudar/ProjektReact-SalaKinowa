import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/EditFilm.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { getData } from "./actions";

function EditFilm({ editFilm, id, films }) {
  let [textInput, setTextInput] = useState("");
  let [urlInput, setUrlInput] = useState("");
  let [numberInput, setNumberInput] = useState("");

  function editFilmInFilmList() {
    console.log("id: " + id);
    console.log(typeof id);
    const ido = films.data.find((film) => film.id === Number(id));
    console.log(ido);
    const editedFilm = {
      id: Number(id),
      title: textInput,
      duration: numberInput,
      imgUrl: urlInput,
      showings: [],
    };
    editFilm(editedFilm, id);
    getData();

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
    <div className="EditFilm">
      <div>
        <Link to="/films">
          <BsArrowLeftShort />
        </Link>
        <h2>Edytuj film:</h2>
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
        <input type="text" name="url" value={urlInput} onChange={changeUrl} />
        <button onClick={editFilmInFilmList}>
          <Link to="/films">Edytuj</Link>
        </button>
      </div>
    </div>
  );
}

export default EditFilm;
