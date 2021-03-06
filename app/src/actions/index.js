import axios from "axios";

const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const ADD_FILM = "ADD_FILM";
const EDIT_FILM = "EDIT_FILM";
const DELETE_FILM = "DELETE_FILM";
const SHOW_ALL = "SHOW_ALL";
const ADD_SHOWING = "ADD_SHOWING";
const EDIT_SHOWING = "EDIT_SHOWING";
const SHOW_SHOWINGS_OF_THAT_DAY = "SHOW_SHOWINGS_OF_THAT_DAY";
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const showFilmsAction = (films) => ({
  type: SHOW_ALL,
  films: films,
});

export const addFilmAction = (newFilm) => ({
  type: ADD_FILM,
  newFilm: newFilm,
});

export const editFilmAction = (editedFilm) => ({
  type: EDIT_FILM,
  editedFilm: editedFilm,
});

export const deleteFilmAction = (data, id) => ({
  type: DELETE_FILM,
  data: data,
  id: id,
});

export const showShowingsOfThatDayAction = (showings) => ({
  type: SHOW_SHOWINGS_OF_THAT_DAY,
  showings: showings,
});

export const addShowingAction = (newShowing, id) => ({
  type: ADD_SHOWING,
  newShowing: newShowing,
  id: id,
});

export const editShowingAction = (updatedFilm, filmId) => ({
  type: EDIT_SHOWING,
  updatedFilm: updatedFilm,
  filmId: filmId,
});
export const incrementCounterAction = () => ({
  type: INCREMENT_COUNTER,
});
export const decrementCounterAction = () => ({
  type: DECREMENT_COUNTER,
});

export const getData = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/orders")
    .then((response) => dispatch(showFilmsAction(response.data)))
    .catch((error) => console.error("Error:", error));
};

export const addFilm =
  ({ newFilm }) =>
  (dispatch) => {
    axios
      .post("http://localhost:3001/orders", newFilm)
      .then((response) => dispatch(addFilmAction(response.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };

export const editFilm =
  ({ editedFilm, id }) =>
  (dispatch) => {
    axios
      .put(`http://localhost:3001/orders/${id}`, editedFilm)
      .then((response) => dispatch(editFilmAction(response.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };

export const deleteFilm =
  ({ id }) =>
  (dispatch) => {
    axios
      .delete(`http://localhost:3001/orders/${id}`)
      .then((response) => dispatch(deleteFilmAction(response.data, id)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };

export const showShowingsOfThatDay = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/orders")
    .then((response) => dispatch(showShowingsOfThatDayAction(response.data)))
    .catch((error) => console.error("Error:", error));
};

export const addShowing =
  ({ newShowing, id }) =>
  (dispatch) => {
    axios
      .put(`http://localhost:3001/orders/${id}`, newShowing)
      .then((response) => dispatch(addShowingAction(response.data, id)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };

export const editShowing =
  ({ updatedFilm, filmId }) =>
  (dispatch) => {
    axios
      .put(`http://localhost:3001/orders/${filmId}`, updatedFilm)
      .then((response) => dispatch(editShowingAction(response.data, filmId)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };

export const incrementCounter = () => (dispatch) => {
  dispatch(incrementCounterAction());
};
export const decrementCounter = () => (dispatch) => {
  dispatch(decrementCounterAction());
};

// export const incrementCounter = () => incrementCounterAction();
// export const decrementCounter = () => decrementCounterAction();
