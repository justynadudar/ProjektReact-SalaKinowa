import "./App.css";
import Repertoire from "./Repertoire";
import Home from "./Home";
import FilmList from "./FilmList";
import CinemaHallList from "./CinemaHallList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
    const counter = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
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
                    {/* <Route path='/users' element={UsersList}/> */}
                    {/* <Route path='/clients/:id' component={ClientEdit}/> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
