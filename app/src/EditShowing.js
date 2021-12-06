import React from "react";
import { Link } from "react-router-dom";
import "./style/EditFilm.css";
import { BsArrowLeftShort } from "react-icons/bs";

class EditShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateInput: " ",
      timeInput: " ",
    };
  }
  componentDidMount() {
    this.props.getData();
  }

  changeDate = (e) => {
    this.setState({
      dateInput: e.target.value,
    });
  };
  changeTime = (e) => {
    this.setState({
      timeInput: e.target.value,
    });
  };

  editShowingInShowingList(films) {
    const showingId = this.props.showingId;
    const updatedFilm = films.data.find(
      (element) => element.id === this.props.location.state.filmId
    );

    const updatedShowing = updatedFilm.showings.find(
      (element) => element.showingId === Number(showingId)
    );
    const editedShowing = {
      showingId: Number(showingId),
      date: this.state.dateInput,
      hour: this.state.timeInput,
      occupiedSeats: updatedShowing.occupiedSeats,
      cinemaHall: updatedShowing.cinemaHall,
      numberOfSeatsSold: updatedShowing.numberOfSeatsSold,
      numberOfAvaibleSeats: updatedShowing.numberOfAvaibleSeats,
    };
    updatedFilm.showings.forEach((showing, showId, showTab) => {
      if (showing.showingId === Number(showingId))
        showTab[showId] = editedShowing;
    });

    this.props.editShowing(updatedFilm, this.props.location.state.filmId);
  }

  render() {
    const { films } = this.props;

    return (
      <div className="AddShowing">
        <div>
          <Link to="/showings">
            <BsArrowLeftShort />
          </Link>
          <h2>Edytuj seans:</h2>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            name="date"
            value={this.state.dateInput}
            onChange={this.changeDate}
          />
          <label htmlFor="time">Godzina:</label>
          <input
            type="time"
            name="hour"
            value={this.state.timeInput}
            onChange={this.changeTime}
          />
          <button onClick={() => this.editShowingInShowingList(films)}>
            <Link to="/showings">Edytuj</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default EditShowing;
