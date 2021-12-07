import React from "react";
import "./style/AddShowing.css";
import { Link, Redirect } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import PropTypes from "prop-types";
import Error from "./Error";

class AddShowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            cinemaHallInput: "",
            dateInput: this.props.location.state.todayDate,
            timeInput: "",
            status: false,
            emptyTitleField: false,
            emptyCinemaHallField: false,
            emptyDateField: false,
            emptyTimeField: false,
            invalidFilmName: false,
            invalidCinemaHallNumber: false,
            invalidDate: false,
            invalidTime: false,
        };
    }
    componentDidMount() {
        this.props.getData();
    }

    changeCinemaHall = (e) => {
        this.setState({
            cinemaHallInput: e.target.value,
            emptyCinemaHall: false,
        });
    };

    changeText = (e) => {
        this.setState({
            textInput: e.target.value,
            emptyTitleField: false,
            invalidFilmName: false,
        });
    };
    changeDate = (e) => {
        this.setState({
            dateInput: e.target.value,
            emptyDateField: false,
        });
    };
    changeTime = (e) => {
        this.setState({
            timeInput: e.target.value,
            emptyTimeField: false,
        });
    };

    addShowingToShowingList() {
        const { dateInput, timeInput, textInput, cinemaHallInput } = this.state;

        this.setState({
            emptyTitleField: false,
            emptyCinemaHallField: false,
            emptyDateField: false,
            emptyTimeField: false,
            invalidFilmName: false,
            invalidCinemaHallNumber: false,
            invalidDate: false,
            invalidTime: false,
        });

        let invalidFilmName = false;
        let today = new Date();
        let stringTodayTime =
            ("0" + today.getHours()).slice(-2) + ":" + today.getMinutes();

        this.props.films.data.forEach((film) => {
            if (textInput !== film.title) invalidFilmName = true;
        });

        if (textInput.length === 0) {
            this.setState({
                emptyTitleField: true,
            });
        } else if (invalidFilmName) {
            this.setState({
                invalidFilmName: true,
            });
        } else if (cinemaHallInput.length === 0) {
            this.setState({
                emptyCinemaHallField: true,
            });
        } else if (cinemaHallInput <= 0 || cinemaHallInput >= 6) {
            this.setState({
                invalidCinemaHallNumber: true,
            });
        } else if (dateInput.length === 0) {
            this.setState({
                emptyDateField: true,
            });
        } else if (
            Date.parse(dateInput) <
            Date.parse(this.props.location.state.todayDate)
        ) {
            this.setState({
                invalidDate: true,
            });
        } else if (timeInput.length === 0) {
            this.setState({
                emptyTimeField: true,
            });
        } else if (timeInput <= stringTodayTime) {
            this.setState({
                invalidTime: true,
            });
        } else {
            const showingId = Math.floor(Math.random() * 99999) + 1;
            const updatedElement = this.props.films.data.find(
                (element) => element.title === this.state.textInput
            );
            const cinemaHall = this.props.films.cinemaHalls.find(
                (element) =>
                    element.hallId === Number(this.state.cinemaHallInput)
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
                            body: cinemaHall.body,
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
    }

    render() {
        const { films } = this.props;
        const {
            status,
            dateInput,
            timeInput,
            textInput,
            cinemaHallInput,
            emptyTitleField,
            emptyCinemaHallField,
            emptyDateField,
            emptyTimeField,
            invalidFilmName,
            invalidCinemaHallNumber,
            invalidDate,
            invalidTime,
        } = this.state;
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
                                  <option key={Math.random()}>
                                      {film.title}
                                  </option>
                              ))
                            : null}
                    </datalist>
                    <label htmlFor="cinemaHall">Sala:</label>
                    <input
                        type="number"
                        list="cinemaHalls"
                        name="hallId"
                        value={cinemaHallInput}
                        onChange={this.changeCinemaHall}
                    />
                    <datalist id="cinemaHalls">
                        {films.loaded
                            ? films.cinemaHalls.map((cinemaHall) => (
                                  <option key={Math.random()}>
                                      {cinemaHall.hallId}
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
                        value={timeInput}
                        onChange={this.changeTime}
                    />
                    <Error
                        error={emptyTitleField}
                        info="Pole tytuł nie może być puste!"
                    />
                    <Error
                        error={invalidFilmName}
                        info="Nie ma takiego filmu!"
                    />
                    <Error
                        error={emptyCinemaHallField}
                        info="Pole sala nie może być puste!"
                    />
                    <Error
                        error={invalidCinemaHallNumber}
                        info="Nie ma takiej sali!"
                    />
                    <Error
                        error={emptyDateField}
                        info="Pole data nie może być puste!"
                    />
                    <Error error={invalidDate} info="Niepoprawna data!" />
                    <Error
                        error={emptyTimeField}
                        info="Pole godzina nie może być puste!"
                    />
                    <Error error={invalidTime} info="Niepoprawna godzina!" />
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
