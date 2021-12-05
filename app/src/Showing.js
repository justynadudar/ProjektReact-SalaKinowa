import Film from "./Film.js";
import "./style/Showing.css";
function Showing({ film }) {
  return (
    <div className="Showing">
      <Film key={Math.random()} film={film} />
      <div className="showingHours">
        {film.showings.map((showing) => (
          <p>{showing.hour}</p>
        ))}
      </div>
    </div>
  );
}

export default Showing;
