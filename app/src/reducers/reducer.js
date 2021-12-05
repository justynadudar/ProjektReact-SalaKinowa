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
            // //jesli zaczynamy z pustym story i plikiem orders.json
            // if (action.films.length === 0 && newState.data.length === 0) {
            //     newState.id = 0;
            // }
            // //jesli jest pierwsze zaladowanie danych do story z pliku json
            // else if (action.films.length !== 0 && newState.data.length === 0) {
            //     //bierzemy wtedy last id z akcji, bo dane jeszcze nie sa zaktualizowane
            newState.id = action.films[action.films.length - 1].id + 1;
            // } else {
            //     //jesli dodajemy filmy ciagiem to pierwszo sie aktualizuje state.data, dlatego w przeciwnym wypadku bierzemy ostatni indeks filmu ze story
            //newState.id = newState.data[newState.data.length - 1].id + 1;
            // }
            //filmy ladujemy z akcji gdy pierwszy raz łaujemy plik lub gdy sie zgadzaja ich wielkosci czyli kiedy przeladowujemy strone
            // if (
            //     action.films.length === newState.data.length ||
            //     (action.films.length !== 0 && newState.data.length === 0)
            // ) {
            newState.data = action.films;
            // }
            //w przeciwmnym wypadku zostaja te filmy ktore sa w story, a jesli dodajemy ciagiem filmy to na pozatku zawsze sa tutaj
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
            newState.id = action.showings[action.showings.length - 1].id + 1;
            newState.loaded = true;
            return newState;

        case "ADD_FILM":
            return Object.assign({}, state, {
                id: ++state.id,
                data: [...state.data, action.newFilm],
            });

        case "EDIT_FILM":
            newState = Object.assign({}, state);
            newState.data.forEach((film, index, tab) => {
                if (film.id === action.editedFilm.id)
                    tab[index] = action.editedFilm;
                return film;
            });
            newState.loaded = true;
            return newState;

        case "DELETE_FILM":
            newState = Object.assign({}, state);
            newState.data = newState.data.filter(
                (film) => film.id !== action.id
            );
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

        default:
            return state;
    }
}
