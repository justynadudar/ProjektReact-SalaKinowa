const initialState = {
  loaded: false,
  data: [],
  id: 0,
  error: "",
};

export default function films(state = initialState, action) {
  let new_state;
  switch (action.type) {
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
      alert("dodano film");
      return Object.assign({}, state, {
        id: state.id + 1,
        data: [...state.data, action.new_film],
      });

    case "DELETE_FILM":
      alert("usunieto film");
      new_state = Object.assign({}, state);
      return new_state;

    case "ADD_SHOWING":
      alert("dodano seans do filmu");
      return Object.assign({}, state);

    default:
      return state;
  }
}
