const initialState = {
  loaded: false,
  data: [],
  error: "",
  cinemaHalls: [
    {
      hallId: 1,
      capacity: 84,
    },
    {
      hallId: 2,
      capacity: 60,
    },
    {
      hallId: 3,
      capacity: 50,
    },
    {
      hallId: 4,
      capacity: 60,
    },
    {
      hallId: 5,
      capacity: 50,
    },
  ],
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
      newState.data = action.films;
      newState.loaded = true;
      return newState;

    case "SHOW_SHOWINGS_OF_THAT_DAY":
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2);

      newState = Object.assign({}, state);
      newState.data.forEach((film) => {
        film.showings = film.showings.filter(
          (showing) => showing.date === date
        );
      });

      newState.data = newState.data.filter(
        (film) => film.showings.length !== 0
      );
      newState.loaded = true;
      return newState;

    case "ADD_FILM":
      return Object.assign({}, state, {
        data: [...state.data, action.newFilm],
      });

    case "EDIT_FILM":
      newState = Object.assign({}, state);
      newState.data.forEach((film, index, tab) => {
        if (film.id === action.editedFilm.id) tab[index] = action.editedFilm;
        return film;
      });
      newState.loaded = true;
      return newState;

    case "DELETE_FILM":
      newState = Object.assign({}, state);
      newState.data = newState.data.filter((film) => film.id !== action.id);
      newState.loaded = true;
      return newState;

    case "ADD_SHOWING":
      newState = Object.assign({}, state);
      newState.data.forEach((el, index, tab) => {
        if (el.id === action.id) tab[index] = action.newShowing;
        return el;
      });
      newState.loaded = true;
      return newState;

    case "EDIT_SHOWING":
      newState = Object.assign({}, state);
      newState.data.forEach((film, index, tab) => {
        if (film.id === action.updatedFilm.id) tab[index] = action.updatedFilm;
        return film;
      });
      newState.loaded = true;
      return newState;

    default:
      return state;
  }
}
