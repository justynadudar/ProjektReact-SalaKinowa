import React from "react";
import Modyfication from "./Modyfication";
import "./style/Repertoire.css";

class Repertoire extends React.Component {
    constructor(props) {
        super(props);
        this.props.getData();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.getData();
        console.log(this.state.data);
        this.setState({ data: this.props.films });
    }

    add(title, date, time) {
        const id = this.props.films.id;
        const sth = {
            "id": id,
            "title": title,
            "duration": 0,
            "imgUrl":"https://cdn.pixabay.com/photo/2016/09/30/11/33/vintage-1705056_960_720.jpg",
            "showings":[
                {
                    "date": date,
                    "hour": time,
                    "occupiedSeats":[
                        {
                            "x":2,
                            "y":5
                        },
                        {
                            "x":3,
                            "y":5
                        }
                    ],
                    "cinemaHall":{
                        "nr":1,
                        "capacity":100
                    },
                    "numberOfSeatsSold": 0,
                    "numberOfAvaibleSeats": 0
                }
            ],
            "cinemaHallId":2
        }
        this.props.newFilm(sth);
    }

    render() {
        const { films } = this.props;

        return (
            <div>
                <div className="repertoire">
                <Modyfication addShowing={(title) => this.add(title)} />
                    {films.loaded
                        ? films.data.map((element) => (
                              <div key={element.id} className="showing">
                                  <img
                                      src={element.imgUrl}
                                      alt={element.title}
                                  />
                                  <div className="showingInformation">
                                      <p>Tytuł: {element.title}</p>
                                      <p>Czas trwania: {element.duration}</p>
                                  </div>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        );
    }
}

export default Repertoire;
