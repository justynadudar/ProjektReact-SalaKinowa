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
      console.log("action: " + action.films.length);
      console.log("data: " + newState.data.length);
      //jesli zaczynamy z pustym story i plikiem orders.json
      if (action.films.length === 0 && newState.data.length === 0) {
        newState.id = 0;
      }
      //jesli jest pierwsze zaladowanie danych do story z pliku json
      else if (action.films.length !== 0 && newState.data.length === 0) {
        //bierzemy wtedy last id z akcji, bo dane jeszcze nie sa zaktualizowane
        newState.id = action.films[action.films.length - 1].id + 1;
      } else {
        //jesli dodajemy filmy ciagiem to pierwszo sie aktualizuje state.data, dlatego w przeciwnym wypadku bierzemy ostatni indeks filmu ze story
        newState.id = newState.data[newState.data.length - 1].id + 1;
      }
      //filmy ladujemy z akcji gdy pierwszy raz łaujemy plik lub gdy sie zgadzaja ich wielkosci czyli kiedy przeladowujemy strone
      if (
        action.films.length === newState.data.length ||
        (action.films.length !== 0 && newState.data.length === 0)
      ) {
        newState.data = action.films;
      }
      //w przeciwmnym wypadku zostaja te filmy ktore sa w story, a jesli dodajemy ciagiem filmy to na pozatku zawsze sa tutaj
      newState.loaded = true;
      return newState;
    case "SHOW_SHOWINGS_OF_THAT_DAY":
      let today = new Date();
      let tmpShowingsArray = [];
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      newState = Object.assign({}, state);
      newState.data = newState.data.forEach((film, id, filmsTab) => {
        filmsTab.showings = filmsTab.forEach((showing, showId, showingsTab) => {
          if (showing.date === date) tmpShowingsArray.push(showing);
        });
        film.showings = tmpShowingsArray;
        return filmsTab;
      });
      newState.id = action.films[action.films.length - 1].id + 1;
      newState.data = action.films;
      newState.loaded = true;
      return newState;

    case "ADD_FILM":
      alert("dodano film");
      return Object.assign({}, state, {
        id: ++state.id,
        data: [...state.data, action.newFilm],
      });

    case "DELETE_FILM":
      alert("usunieto film");
      newState = Object.assign({}, state);
      newState.data = newState.data.filter((film) => film.id !== action.id);
      newState.loaded = true;
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
