import axios from "axios";

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios
            .get("http://localhost:3001/orders")
            .then((response) => dispatch(fetchDataSuccess(response.data)))
            .catch((err) => dispatch(fetchDataFailure(err.data)));
    };
};
