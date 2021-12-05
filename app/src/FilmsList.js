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

// async add() {
//     const sth = {
//         id: 6,
//         title: "John Smith",
//         duration: 110,
//         imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/20/22/vintage-1706242_960_720.jpg",
//         dates: [],
//         cinemaHallId: null,
//     };
//     console.log(sth);
//     await fetch("http://localhost:3001/orders", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(sth),
//     })
//         .then((response) => response.json())
//         .then(() => {
//             alert("Dodano użytkownika");
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
