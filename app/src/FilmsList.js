import "./style/FilmsList.css";
import Film from "./Film";
import { Link } from "react-router-dom";
import React from "react";
import { BiAddToQueue } from "react-icons/bi";

class FilmsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { films } = this.props;

    return (
      <div className="filmList">
        <div className="addFilmButton">
          <Link to="/addFilm">
            <BiAddToQueue />
          </Link>
        </div>
        <div className="films">
          {films.loaded
            ? films.data.map((film) => (
                <Film
                  key={Math.random()}
                  film={film}
                  deleteFilm={this.props.deleteFilm}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default FilmsList;
