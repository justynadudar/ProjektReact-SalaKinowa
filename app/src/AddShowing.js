import React from "react";
import "./style/AddShowing.css";
import { Link, Redirect } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import PropTypes from "prop-types";

class AddShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      cinemaHallInput: "",
      dateInput: this.props.location.state.todayDate,
      timeInput: "",
      status: false,
    };
  }
  componentDidMount() {
    this.props.getData();
  }

  changecinemaHall = (e) => {
    this.setState({
      cinemaHallInput: e.target.value,
    });
  };

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

  addShowingToShowingList() {
    const showingId = Math.floor(Math.random() * 99999) + 1;
    const updatedElement = this.props.films.data.find(
      (element) => element.title === this.state.textInput
    );
    const cinemaHall = this.props.films.cinemaHalls.find(
      (element) => element.hallId === Number(this.state.cinemaHallInput)
    );
    const newShowing = {
      id: updatedElement.id,
      title: updatedElement.title,
      duration: updatedElement.duration,
      imgUrl: updatedElement.imgUrl,
      showings: [
        ...updatedElement.showings,
        {
          showingId: showingId,
          date: this.state.dateInput,
          hour: this.state.timeInput,
          occupiedSeats: [],
          cinemaHall: {
            hallId: Number(this.state.cinemaHallInput),
            capacity: cinemaHall.capacity,
          },
          numberOfSeatsSold: 0,
          numberOfAvaibleSeats: cinemaHall.capacity,
        },
      ],
    };
    this.props.addShowing(newShowing, updatedElement.id);
    this.setState({ status: true });
    this.props.getData();
    this.props.showShowingsOfThatDay();
  }

  render() {
    const { films } = this.props;
    const { status, dateInput, timeInput, textInput, cinemaHallInput } =
      this.state;
    if (status === true) return <Redirect to="/showings" />;
    return (
      <div className="AddShowing">
        <div>
          <Link to="/showings">
            <BsArrowLeftShort />
          </Link>
          <h2>Dodaj seans:</h2>
          <label htmlFor="title">Film:</label>
          <input
            type="text"
            list="films"
            name="title"
            value={textInput}
            onChange={this.changeText}
          />
          <datalist id="films">
            {films.loaded
              ? films.data.map((film) => (
                  <option key={Math.random()}>{film.title}</option>
                ))
              : null}
          </datalist>
          <label htmlFor="cinemaHall">Sala:</label>
          <input
            type="text"
            list="cinemaHalls"
            name="hallId"
            value={cinemaHallInput}
            onChange={this.changecinemaHall}
          />
          <datalist id="cinemaHalls">
            {films.loaded
              ? films.cinemaHalls.map((cinemaHall) => (
                  <option key={Math.random()}>{cinemaHall.hallId}</option>
                ))
              : null}
          </datalist>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            name="date"
            value={dateInput}
            onChange={this.changeDate}
          />
          <label htmlFor="time">Godzina:</label>
          <input
            type="time"
            name="hour"
            value={timeInput}
            onChange={this.changeTime}
          />
          <button onClick={() => this.addShowingToShowingList()}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default AddShowing;

AddShowing.propTypes = {
  addShowing: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  films: PropTypes.shape({
    error: PropTypes.string,
    data: PropTypes.array,
    loaded: PropTypes.bool,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
    state: PropTypes.shape({
      modal: PropTypes.bool,
      todayDate: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showShowingsOfThatDay: PropTypes.func.isRequired,
};
