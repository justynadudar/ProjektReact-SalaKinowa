import React from "react";
import Modyfication from "./Modyfication";
import Showing from "./Showing";
import "./style/ShowingsList.css";

class ShowingsList extends React.Component {
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
        <div className="showingsList">
          <Modyfication
            key={Math.random()}
            films={this.props.films}
            newShowing={this.props.newShowing}
          />
          <div className="showings">
            {films.loaded
              ? films.data.map((showing) => (
                  <Showing key={Math.random()} film={showing} />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowingsList;
