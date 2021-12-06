import ShowingsList from "./ShowingsList";
import AddShowing from "./AddShowing";
import EditShowing from "./EditShowing";
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
        render={() => (
          <AddFilm addFilm={addFilm} films={films} getData={getData} />
        )}
      />
      <Route
        path="/editFilm/:id"
        render={({ match }) => (
          <EditFilm editFilm={editFilm} id={match.params.id} films={films} />
        )}
      />
      <Route
        path="/addShowing"
        render={() => (
          <AddShowing
            showShowingsOfThatDay={showShowingsOfThatDay}
            addShowing={addShowing}
            films={films}
            getData={getData}
          />
        )}
      />
      <Route
        path="/editShowing/:id"
        render={({ match, location }) => (
          <EditShowing
            location={location}
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
