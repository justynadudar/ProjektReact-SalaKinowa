import ShowingsList from "./ShowingsList";
import Home from "./Home";
import FilmsList from "./FilmsList";
import Navbar from "./Navbar";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App({ getData, newFilm, films, newShowing }) {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route
        path="/showings"
        render={() => (
          <ShowingsList
            getData={getData}
            newFilm={newFilm}
            films={films}
            newShowing={newShowing}
          />
        )}
      />
      <Route
        path="/films"
        render={() => (
          <FilmsList getData={getData} newFilm={newFilm} films={films} />
        )}
      />
      <Route path="/cinemahalls" component={CinemaHallList} />
    </Router>
  );
}

export default App;

/* <Route path='/users' element={UsersList}/>
<Route path='/clients/:id' component={ClientEdit}/> */
