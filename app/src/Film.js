import "./style/Film.css";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

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
                            pathname: "/editFilm",
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
