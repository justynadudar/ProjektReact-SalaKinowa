import "./style/FilmList.css";
import Showing from "./Showing";
import AddFilm from "./AddFilm.js";
import Home from "./Home.js";
import React from "react";
import { connect } from "react-redux";
import { newFilm } from "./actions";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
    }


    add(title){
         const { films } = this.props;
         const id = this.props.films.id;
        const sth = {
                id: id,
                title: title,
                duration: 130,
                imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/11/33/vintage-1705056_960_720.jpg",
                dates: [],
                cinemaHallId: 2
            }
        this.props.newFilm(sth);
    }
    

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

    render() {
        
        return (
            <div>
                <Home />
                <ul>
                    {/* {dane.map((element) =>  <Showing film={element}/>)} */}
                    <AddFilm handleClick={(title) => this.add(title)} />
                    <AddFilm handleClick={(title) => this.add(title)} />
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newFilm: (new_film) => dispatch(newFilm({data:new_film})),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
