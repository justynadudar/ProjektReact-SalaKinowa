import PropTypes from "prop-types";
import "./style/Film.css";
import { Link } from "react-router-dom";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";

function Film({ film, deleteFilm }) {
    return (
        <div className="Film">
            <div className="imageHolder">
                <img src={film.imgUrl} alt="" />
            </div>
            <div className="descriptionHolder">
                <h2>{film.title}</h2>
                <p>
                    Czas trwania: <b>{film.duration}</b>
                </p>
            </div>
            <div className="buttonsHolder">
                <div className="holder">
                    <Link
                        to={{
                            pathname: `/editFilm/${film.id}`,
                            state: { modal: true },
                        }}
                    >
                        <AiTwotoneEdit />
                    </Link>
                    <button onClick={() => deleteFilm(film.id)}>
                        <AiFillDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Film;

Film.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        duration: PropTypes.string,
        imgUrl: PropTypes.string,
        showings: PropTypes.array,
    }).isRequired,
    deleteFilm: PropTypes.func,
};
