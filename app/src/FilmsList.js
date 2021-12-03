import "./style/FilmsList.css";
import Film from "./Film";
import AddFilm from "./AddFilm.js";
import React from "react";

class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.getData();
        console.log(this.props.data);
        this.setState({ data: this.props.films.data });
    }

    add(title) {
        const id = this.props.films.id;
        const sth = {
            id: id,
            title: title,
            duration: 130,
            imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/11/33/vintage-1705056_960_720.jpg",
            dates: [],
            cinemaHallId: 2,
        };
        this.props.newFilm(sth);
    }

    render() {
        const { films } = this.props;
        console.log(films.data);
        return (
            <div className="filmList">
                <AddFilm handleClick={(title) => this.add(title)} />
                <div className="films">
                    {films.loaded
                        ? films.data.map((film) => (
                              <Film key={Math.random()} film={film} />
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
