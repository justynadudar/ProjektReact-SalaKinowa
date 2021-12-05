import ShowingsList from "./ShowingsList";
import AddFilm from "./AddFilm";
import Home from "./Home";
import FilmsList from "./FilmsList";
import Navbar from "./Navbar";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App({
  getData,
  addFilm,
  deleteFilm,
  films,
  addShowing,
  showShowingsOfThatDay,
}) {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route
        path="/addFilm"
        render={() => <AddFilm addFilm={addFilm} films={films} />}
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
            addFilm={addFilm}
            films={films}
          />
        )}
      />
      <Route path="/cinemahalls" component={CinemaHallList} />
    </Router>
  );
}

export default App;

/* <Route path='/users' element={UsersList}/>
<Route path='/clients/:id' component={ClientEdit}/> */
