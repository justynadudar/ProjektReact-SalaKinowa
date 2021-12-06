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
            dateInput: this.props.location.state.todayDate,
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

    addShowingToShowingList() {
        const showingId = Math.floor(Math.random() * 99999) + 1;
        const updatedElement = this.props.films.data.find(
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
                    cinemaHall: { nr: 1, capacity: 40 },
                    numberOfSeatsSold: 0,
                    numberOfAvaibleSeats: 0,
                },
            ],
        };
        this.props.addShowing(newShowing, updatedElement.id);
        this.props.getData();
        this.props.showShowingsOfThatDay();
        this.setState({ status: true });
    }

    render() {
        const { films } = this.props;
        const { status, dateInput } = this.state;
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
                        value={this.textInput}
                        onChange={this.changeText}
                    />
                    <datalist id="films">
                        {films.loaded
                            ? films.data.map((film) => (
                                  <option key={Math.random()}>
                                      {film.title}
                                  </option>
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
                        value={this.timeInput}
                        onChange={this.changeTime}
                    />
                    <button onClick={() => this.addShowingToShowingList()}>
                        Dodaj
                    </button>
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
