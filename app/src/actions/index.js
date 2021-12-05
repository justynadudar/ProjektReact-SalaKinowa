import axios from "axios";

const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const ADD_FILM = "ADD_FILM";
const DELETE_FILM = "DELETE_FILM";
const SHOW_ALL = "SHOW_ALL";
const ADD_SHOWING = "ADD_SHOWING";

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

export const deleteFilmAction = (data) => ({
    type: DELETE_FILM,
    data: data,
});

export const addShowingAction = (data, id) => ({
    type: ADD_SHOWING,
    data: data,
    id: id,
});

export const getData = () => (dispatch) => {
    return axios
        .get("http://localhost:3001/orders")
        .then((response) => dispatch(showFilmsAction(response.data)))
        .catch((error) => console.error("Error:", error));
};

export const addFilm = (newFilm) => (dispatch) => {
    const new_film_to_send = newFilm.data;
    console.log(new_film_to_send);
    axios
        .post("http://localhost:3001/orders", new_film_to_send)
        .then((response) => dispatch(addFilmAction(response.data)))
        .catch((err) => dispatch(fetchDataFailure(err.data)));
};

export const deleteFilm =
    ({ id }) =>
    (dispatch) => {
        console.log(id);
        axios
            .delete(`http://localhost:3001/orders/${id}`)
            .then((response) => dispatch(deleteFilmAction(response.data)))
            .catch((err) => dispatch(fetchDataFailure(err.data)));
    };

export const newShowing = (data, id) => (dispatch) => {
    const new_showing_to_send = data.data;
    console.log(`http://localhost:3001/orders/${data.id}`);
    axios
        .put(`http://localhost:3001/orders/${data.id}`, new_showing_to_send)
        .then((response) => dispatch(addShowingAction(response.data, id)))
        .catch((err) => dispatch(fetchDataFailure(err.data)));
};
