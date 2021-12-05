import React from "react";
import "./style/Modyfication.css";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

class Modyfication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      dateInput: "",
      timeInput: "",
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

  addShowingToShowingList(films) {
    const showingId = Math.floor(Math.random() * 99999) + 1;
    const updatedElement = films.data.find(
      (element) => element.title === this.state.textInput
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
          cinemaHall: { nr: 1, capacity: 100 },
          numberOfSeatsSold: 0,
          numberOfAvaibleSeats: 0,
        },
      ],
    };
    this.props.addShowing(newShowing, updatedElement.id);
  }

  render() {
    const { films } = this.props;
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
            value={this.dateInput}
            onChange={this.changeDate}
          />
          <label htmlFor="time">Godzina:</label>
          <input
            type="time"
            name="hour"
            value={this.timeInput}
            onChange={this.changeTime}
          />
          <button onClick={() => this.addShowingToShowingList(films)}>
            <Link to="/showings">Dodaj</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Modyfication;
