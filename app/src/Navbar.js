import "./style/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Kasa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/showings">Seanse</NavLink>
                </li>
                <li>
                    <NavLink to="/films">Filmy</NavLink>
                </li>
                <li></li>
            </ul>
        </nav>
    );
}

export default Navbar;
