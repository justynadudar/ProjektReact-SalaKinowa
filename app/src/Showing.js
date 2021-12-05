import Film from "./Film.js";
import "./style/Showing.css";
function Showing({ film }) {
  return (
    <div className="Showing">
      <Film key={Math.random()} film={film} />
      <p>{film.showings.hour}</p>
    </div>
  );
}

export default Showing;
