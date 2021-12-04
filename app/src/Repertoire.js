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
        const updatedElement = this.props.films.data.find(
            (element) => element.title === title
        );

        const sth = {
            id: updatedElement.id,
            title: updatedElement.title,
            duration: updatedElement.duration,
            imgUrl: updatedElement.imgUrl,
            showings: [
                ...updatedElement.showings,
                {
                    date: date,
                    hour: time,
                    occupiedSeats: [],
                    cinemaHall: { nr: 1, capacity: 100 },
                    numberOfSeatsSold: 0,
                    numberOfAvaibleSeats: 0,
                },
            ],
        };

        this.props.newShowing(sth, updatedElement.id);
    }

    render() {
        const { films } = this.props;

        return (
            <div>
                <div className="repertoire">
                    <Modyfication
                        films={this.props.films}
                        newShowing={this.props.newShowing}
                    />
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
