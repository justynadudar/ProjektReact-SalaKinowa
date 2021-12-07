const initialState = {
  loaded: false,
  data: [],
  error: "",
  cinemaHalls: [
    {
      hallId: 1,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
    },
    {
      hallId: 2,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
    },
    {
      hallId: 3,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
    },
    {
      hallId: 4,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
    },
    {
      hallId: 5,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
    },
  ],
  counter: 0,
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

    case "INCREMENT_COUNTER":
      return Object.assign({}, state, {
        counter: ++state.counter,
      });

    case "DECREMENT_COUNTER":
      return Object.assign({}, state, {
        counter: --state.counter,
      });

    case "SHOW_SHOWINGS_OF_THAT_DAY":
      let today = new Date();
      if (state.counter > 0) {
        let stringToday =
          today.getFullYear() +
          "-" +
          ("0" + (today.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + (today.getDate() + state.counter)).slice(-2);

        newState = Object.assign({}, state);
        newState.data.forEach((film) => {
          film.showings = film.showings.filter(
            (showing) => showing.date === stringToday
          );
          return film;
        });

        newState.data = newState.data.filter(
          (film) => film.showings.length !== 0
        );
        newState.loaded = true;
        return newState;
      } else if (state.counter === 0) {
        let stringToday =
          today.getFullYear() +
          "-" +
          ("0" + (today.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + (today.getDate() + state.counter)).slice(-2);

        let stringTodayTime =
          ("0" + today.getHours()).slice(-2) + ":" + today.getMinutes();

        newState = Object.assign({}, state);
        newState.data.forEach((film) => {
          film.showings = film.showings.filter(
            (showing) => showing.date === stringToday
          );
          film.showings = film.showings.filter(
            (showing) => showing.hour >= stringTodayTime
          );
          return film;
        });

        newState.data = newState.data.filter(
          (film) => film.showings.length !== 0
        );
        newState.loaded = true;
        return newState;
      } else return state;

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
