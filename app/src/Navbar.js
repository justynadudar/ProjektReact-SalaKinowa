import "./style/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/repertoire">Repertuar</NavLink>
                </li>
                <li>
                    <NavLink to="/films">Filmy</NavLink>
                </li>
                <li>
                    <NavLink to="/cinemahalls">Sale</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
