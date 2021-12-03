import Repertoire from "./Repertoire";
import Home from "./Home";
import FilmsList from "./FilmsList";
import Navbar from "./Navbar";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/repertoire" element={<Repertoire />} />
                <Route exact path="/films" element={<FilmsList />} />
                <Route exact path="/cinemahalls" element={<CinemaHallList />} />
            </Routes>
        </Router>
    );
}

export default App;

/* <Route path='/users' element={UsersList}/>
<Route path='/clients/:id' component={ClientEdit}/> */
