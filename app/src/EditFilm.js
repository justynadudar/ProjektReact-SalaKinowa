import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style/EditFilm.css";
import Error from "./Error";
import { BsArrowLeftShort } from "react-icons/bs";
import PropTypes from "prop-types";

function EditFilm({ editFilm, id, films, getData }) {
  let history = useHistory();
  getData();

  let [textInput, setTextInput] = useState(
    films.data.find((element) => element.id === id).title
  );
  let [urlInput, setUrlInput] = useState(
    films.data.find((element) => element.id === id).imgUrl
  );
  let [numberInput, setNumberInput] = useState(
    films.data.find((element) => element.id === id).duration
  );

  let [emptyTitleField, setEmptyTitleField] = useState(false);
  let [emptyDurationField, setEmptyDurationField] = useState(false);
  let [durationFieldIncorrectNumber, setDurationFieldIncorrectNumber] =
    useState(false);
  let [emptyImageField, setEmptyImageField] = useState(false);
  let [isImageFieldNotValid, setIsImageFieldNotValid] = useState(false);

  function editFilmInFilmList() {
    if (textInput.length === 0) setEmptyTitleField(true);
    else if (numberInput.length === 0) setEmptyDurationField(true);
    else if (numberInput < 0 || numberInput > 240)
      setDurationFieldIncorrectNumber(true);
    else if (urlInput.length === 0) setEmptyImageField(true);
    else if (!isValidImageURL(urlInput)) setIsImageFieldNotValid(true);
    else {
      const editedFilm = {
        id: id,
        title: textInput,
        duration: numberInput,
        imgUrl: urlInput,
        showings: [],
      };

      editFilm(editedFilm, id);

      setTextInput("");
      setNumberInput("");
      setUrlInput("");
      setEmptyTitleField(false);
      setEmptyDurationField(false);
      setEmptyImageField(false);
      setDurationFieldIncorrectNumber(false);
      setIsImageFieldNotValid(false);

      history.push("/films");
    }
  }

  function changeText(e) {
    if (emptyTitleField) setEmptyTitleField(false);
    setTextInput(e.target.value);
  }

  function changeNumber(e) {
    if (emptyDurationField) setEmptyDurationField(false);
    if (durationFieldIncorrectNumber) setDurationFieldIncorrectNumber(false);
    setNumberInput(e.target.value);
  }

  function changeUrl(e) {
    if (emptyImageField) setEmptyImageField(false);
    if (isImageFieldNotValid) setEmptyImageField(false);
    setUrlInput(e.target.value);
  }

  function isValidImageURL(str) {
    if (typeof str !== "string") return false;
    return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
  }

  return (
    <div className="EditFilm">
      <div>
        <Link to="/films">
          <BsArrowLeftShort />
        </Link>
        <h2>Edytuj film:</h2>
        <label htmlFor="title">Tytu??:</label>
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
        <Error error={emptyTitleField} info="Pole tytu?? nie mo??e by?? puste!" />
        <Error
          error={emptyDurationField}
          info="Pole czas trwania nie mo??e by?? puste!"
        />
        <Error
          error={durationFieldIncorrectNumber}
          info="Pole czas trwania musi by?? liczb?? dodatni?? oraz mniejsz?? lub r??wn?? 240!"
        />
        <Error
          error={emptyImageField}
          info="Pole adres url nie mo??e by?? puste!"
        />
        <Error
          error={isImageFieldNotValid}
          info="Niepoprawny adres url, adres musi prowadzi?? zasobu, kt??ry jest zdj??ciem!"
        />
        <button onClick={editFilmInFilmList}>Edytuj</button>
      </div>
    </div>
  );
}

export default EditFilm;

EditFilm.propTypes = {
  editFilm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  films: PropTypes.shape({
    error: PropTypes.string,
    data: PropTypes.array,
    loaded: PropTypes.bool,
  }).isRequired,
  id: function (props, propName, component) {
    if (props[propName] < 0) {
      return new Error("id nie mo??e by?? ujemne!");
    }
  },
};
