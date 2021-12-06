import Film from "./Film.js";
import { Link } from "react-router-dom";
import "./style/Showing.css";
function Showing({ film }) {
  return (
    <div className="Showing">
      <Film key={Math.random()} film={film} />
      <div className="showingHours">
        {film.showings.map((showing) => (
          <p key={Math.random()}>
            <Link
              to={{
                pathname: `/editShowing/${showing.showingId}`,
                state: { filmId: film.id },
              }}
            >
              {showing.hour}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Showing;
