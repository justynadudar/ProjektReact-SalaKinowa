const initialState = {
    loaded: false,
    data: [],
    id: 0,
    error: "",
};
// initialState.id = initialState.data[initialState.data.length].id;

export default function films(state = initialState, action) {
    let new_state;
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                loaded: true,
                data: [],
                error: "",
            };
        case "FETCH_DATA_SUCCESS":
            alert("sukces!");
            return {
                loaded: false,
                data: action.payload,
                error: "",
            };
        case "FETCH_DATA_FAILURE":
            return {
                loaded: false,
                data: [],
                error: action.payload,
            };
        case "SHOW_ALL":
            new_state = Object.assign({}, state);
            new_state.id = action.data[action.data.length - 1].id + 1;
            new_state.data = action.data;
            new_state.loaded = true;
            return new_state;

        case "ADD_FILM":
            alert("jestem");
            return Object.assign({}, state, {
                id: state.id + 1,
                data: [...state.data, action.new_film],
            });
        default:
            return state;
    }
}
