import "./style/Film.css";

function Film({ film }) {
    return (
        <div class="Film">
            <div className="imageHolder">
                <img
                    src="https://nerdheim.pl/wp-content/uploads/2019/11/joker_0.jpg"
                    alt=""
                />
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
