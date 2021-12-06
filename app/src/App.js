import ShowingsList from "./ShowingsList";
import AddShowing from "./AddShowing";
import EditShowing from "./EditShowing";
import AddFilm from "./AddFilm";
import EditFilm from "./EditFilm";
import Checkout from "./Checkout";
import BuyTicket from "./BuyTicket.js";
import FilmsList from "./FilmsList";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App({
  getData,
  addFilm,
  editFilm,
  deleteFilm,
  films,
  addShowing,
  editShowing,
  showShowingsOfThatDay,
  incrementCounter,
  decrementCounter,
}) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/buyTicket"
          render={({ location }) => (
            <BuyTicket
              location={location}
              films={films}
              editShowing={editShowing}
              showShowingsOfThatDay={showShowingsOfThatDay}
              getData={getData}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Checkout
              getData={getData}
              showShowingsOfThatDay={showShowingsOfThatDay}
              films={films}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
            />
          )}
        />
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
          render={({ location }) => (
            <AddShowing
              location={location}
              showShowingsOfThatDay={showShowingsOfThatDay}
              addShowing={addShowing}
              films={films}
              getData={getData}
            />
          )}
        />

        <Route
          path="/editShowing"
          render={({ location }) => (
            <EditShowing
              location={location}
              editShowing={editShowing}
              showShowingsOfThatDay={showShowingsOfThatDay}
              films={films}
              getData={getData}
              addShowing={addShowing}
            />
          )}
        />
        <Route
          path="/showings"
          render={() => (
            <ShowingsList
              getData={getData}
              showShowingsOfThatDay={showShowingsOfThatDay}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
              films={films}
              addFilm={addFilm}
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
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
