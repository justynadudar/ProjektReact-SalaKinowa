import Repertoire from "./Repertoire";
import Home from "./Home";
import FilmsList from "./FilmsList";
import Navbar from "./Navbar";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App({ getData, newFilm, films }) {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} />
                <Route
                    path="/repertoire"
                    render={() => {
                        <Repertoire getData={getData} films={films} />;
                    }}
                />
                <Route
                    path="/films"
                    render={() => {
                        <FilmsList getData={getData} newFilm={newFilm} />;
                    }}
                />
                <Route path="/cinemahalls" component={CinemaHallList} />
            </Switch>
        </Router>
    );
}

export default App;

/* <Route path='/users' element={UsersList}/>
<Route path='/clients/:id' component={ClientEdit}/> */
