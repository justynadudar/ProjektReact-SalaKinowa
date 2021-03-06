import Film from "./Film.js";
import { Link } from "react-router-dom";
import "./style/Showing.css";
import PropTypes from "prop-types";

function Showing({ film, destination }) {
    return (
        <div className="Showing">
            <Film key={Math.random()} film={film} />
            <div className="showingHours">
                {film.showings.map((showing) => (
                    <p key={Math.random()}>
                        {destination === "Checkout" ? (
                            <Link
                                to={{
                                    pathname: `/buyTicket`,
                                    state: {
                                        showingId: showing.showingId,
                                        filmId: film.id,
                                    },
                                }}
                            >
                                {showing.hour}
                            </Link>
                        ) : (
                            <Link
                                to={{
                                    pathname: `/editShowing`,
                                    state: {
                                        showingId: showing.showingId,
                                        filmId: film.id,
                                    },
                                }}
                            >
                                {showing.hour}
                            </Link>
                        )}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Showing;

Showing.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        duration: PropTypes.string,
        imgUrl: PropTypes.string,
        showings: PropTypes.array,
    }).isRequired,
    destination: PropTypes.string.isRequired,
};
