import "./style/Film.css";

function Film({ film }) {
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
    </div>
  );
}

export default Film;
