import axios from "axios";

// const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
// const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const ADD_FILM = "ADD_FILM";
const DELETE_FILM = "DELETE_FILM";
const SHOW_ALL = "SHOW_ALL";
const ADD_SHOWING = "ADD_SHOWING";

// export const fetchDataRequest = () => {
//     return {
//         type: FETCH_DATA_REQUEST,
//     };
// };

// export const fetchDataSuccess = (data) => {
//     return {
//         type: FETCH_DATA_SUCCESS,
//         payload: data,
//     };
// };

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

// export const fetchData = () => {
//     return (dispatch) => {
//         dispatch(fetchDataRequest());
//         axios
//             .get("http://localhost:3001/orders")
//             .then((response) => dispatch(fetchDataSuccess(response.data)))
//             .catch((err) => dispatch(fetchDataFailure(err.data)));
//     };
// };

export const showFilmsAction = (data) => ({
    type: SHOW_ALL,
    data,
});

export const addFilmAction = (new_film) => ({
    type: ADD_FILM,
    new_film,
});

export const deleteFilmAction = (data) => ({
    type: DELETE_FILM,
    data,
});

export const addShowingAction = (data, id) => ({
    type: ADD_SHOWING,
    data,
    id,
});

export const getData = () => (dispatch) => {
    return axios
        .get("http://localhost:3001/orders")
        .then((response) => dispatch(showFilmsAction(response.data)))
        .catch((error) => console.error("Error:", error));
};

export const newFilm = (new_film) => (dispatch) => {
    const new_film_to_send = new_film.data;
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
