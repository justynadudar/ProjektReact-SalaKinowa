import ShowingsList from "./ShowingsList";
import Modyfication from "./Modyfication";
import AddFilm from "./AddFilm";
import EditFilm from "./EditFilm";
import Home from "./Home";
import FilmsList from "./FilmsList";
import Navbar from "./Navbar";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App({
    getData,
    addFilm,
    editFilm,
    deleteFilm,
    films,
    addShowing,
    editShowing,
    showShowingsOfThatDay,
}) {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route
                path="/addFilm"
                render={() => <AddFilm addFilm={addFilm} getData={getData} />}
            />
            <Route
                path="/editFilm/:id"
                render={({ match }) => (
                    <EditFilm
                        editFilm={editFilm}
                        id={Number(match.params.id)}
                        films={films}
                        getData={getData}
                    />
                )}
            />
            <Route
                path="/addShowing"
                render={() => (
                    <Modyfication
                        addShowing={addShowing}
                        films={films}
                        getData={getData}
                    />
                )}
            />
            <Route
                path="/editShowing/:id"
                render={({ match }) => (
                    <Modyfication
                        editShowing={editShowing}
                        showingId={match.params.id}
                        films={films}
                        getData={getData}
                    />
                )}
            />
            <Route
                path="/showings"
                render={() => (
                    <ShowingsList
                        getData={getData}
                        showShowingsOfThatDay={showShowingsOfThatDay}
                        addFilm={addFilm}
                        films={films}
                        addShowing={addShowing}
                    />
                )}
            />
            <Route
                path="/films"
                render={() => (
                    <FilmsList
                        getData={getData}
                        deleteFilm={deleteFilm}
                        films={films}
                    />
                )}
            />
            <Route path="/cinemahalls" component={CinemaHallList} />
        </Router>
    );
}

export default App;
