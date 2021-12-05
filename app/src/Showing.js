import Film from "./Film.js";
import "./style/Showing.css";
function Showing({ film }) {
    return (
        <div className="Showing">
            <Film film={film} />
            {/* <p>{film.showings.hour}</p> */}
            <p>11:05</p>
        </div>
    );
}

export default Showing;
