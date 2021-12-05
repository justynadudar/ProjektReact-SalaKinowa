const initialState = {
  loaded: false,
  data: [],
  id: 0,
  error: "",
};

export default function films(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "FETCH_DATA_FAILURE":
      return {
        loaded: false,
        data: [],
        error: action.payload,
      };
    case "SHOW_ALL":
      newState = Object.assign({}, state);
      newState.id = action.films[action.films.length - 1].id + 1;
      newState.data = action.films;
      newState.loaded = true;
      return newState;

    case "ADD_FILM":
      alert("dodano film");
      return Object.assign({}, state, {
        id: state.id + 1,
        data: [...state.data, action.newFilm],
      });

    case "DELETE_FILM":
      alert("usunieto film");
      newState = Object.assign({}, state);
      return newState;

    case "ADD_SHOWING":
      alert("dodano seans do filmu");
      newState = Object.assign({}, state);
      newState.data.forEach((el, index, tab) => {
        if (el.id === action.id) tab[index] = action.newShowing;
        return el;
      });
      newState.loaded = true;
      return newState;

    default:
      return state;
  }
}
