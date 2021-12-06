import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/EditFilm.css";
import { BsArrowLeftShort } from "react-icons/bs";

class EditShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      dateInput: "",
      timeInput: "",
      status: false,
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  changeText = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

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
    const showingId = this.props.location.state.showingId;
    const updatedFilm = films.data.find(
      (element) => element.id === this.props.location.state.filmId
    );
    const updatedFilmWithoutThisShit = films.data.find(
      (element) => element.title === this.state.textInput
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

    if (updatedFilmWithoutThisShit.id === this.props.location.state.filmId) {
      updatedFilm.showings.forEach((showing, showId, showTab) => {
        if (showing.showingId === Number(showingId))
          showTab[showId] = editedShowing;
      });

      this.props.editShowing(updatedFilm, this.props.location.state.filmId);
    } else {
      const newOldShowing = {
        id: updatedFilmWithoutThisShit.id,
        title: updatedFilmWithoutThisShit.title,
        duration: updatedFilmWithoutThisShit.duration,
        imgUrl: updatedFilmWithoutThisShit.imgUrl,
        showings: [...updatedFilmWithoutThisShit.showings, editedShowing],
      };

      this.props.addShowing(newOldShowing, updatedFilmWithoutThisShit.id);
      updatedFilm.showings = updatedFilm.showings.filter(
        (showing) => showing.showingId !== Number(showingId)
      );

      this.props.editShowing(updatedFilm, this.props.location.state.filmId);
      this.props.getData();
      this.props.showShowingsOfThatDay();
      this.setState({ status: true });
    }
  }

  render() {
    const { films } = this.props;
    const { status } = this.state;
    if (status === true) return <Redirect to="/showings" />;
    return (
      <div className="AddShowing">
        <div>
          <Link to="/showings">
            <BsArrowLeftShort />
          </Link>
          <h2>Edytuj seans:</h2>
          <label htmlFor="title">Film:</label>
          <input
            type="text"
            list="films"
            name="title"
            value={this.textInput}
            onChange={this.changeText}
          />
          <datalist id="films">
            {films.loaded
              ? films.data.map((film) => (
                  <option key={Math.random()}>{film.title}</option>
                ))
              : null}
          </datalist>
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
            Edytuj
          </button>
        </div>
      </div>
    );
  }
}

export default EditShowing;
