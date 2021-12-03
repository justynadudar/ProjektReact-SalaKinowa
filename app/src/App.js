import Repertoire from "./Repertoire";
import Home from "./Home";
import FilmList from "./FilmList";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/repertoire" element={<Repertoire />} />
                    <Route exact path="/films" element={<FilmList />} />
                    <Route
                        exact
                        path="/cinemahalls"
                        element={<CinemaHallList />}
                    />
                    {/* <Route path='/users' element={UsersList}/>
<Route path='/clients/:id' component={ClientEdit}/> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
