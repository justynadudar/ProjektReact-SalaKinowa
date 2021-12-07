import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/EditShowing.css";
import { BsArrowLeftShort } from "react-icons/bs";
import PropTypes from "prop-types";
import Error from "./Error";

class EditShowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            cinemaHallInput: "",
            dateInput: "",
            timeInput: "",
            updatedFilm: {},
            updatedShowing: {},
            showingId: Number(this.props.location.state.showingId),
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
        this.state.updatedFilm = this.props.films.data.find(
            (element) => element.id === this.props.location.state.filmId
        );
        this.state.updatedShowing = this.state.updatedFilm.showings.find(
            (element) => element.showingId === this.state.showingId
        );

        this.state.textInput = this.state.updatedFilm.title;
        this.state.cinemaHallInput =
            this.state.updatedShowing.cinemaHall.hallId;
        this.state.dateInput = this.state.updatedShowing.date;
        this.state.timeInput = this.state.updatedShowing.hour;
    }

    componentDidMount() {
        this.props.getData();
    }

    changeText = (e) => {
        this.setState({
            textInput: e.target.value,
            emptyTitleField: false,
            invalidFilmName: false,
        });
    };
    changeCinemaHall = (e) => {
        this.setState({
            cinemaHallInput: e.target.value,
            emptyCinemaHall: false,
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

    editShowingInShowingList(films) {
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

        let invalidFilmName = true;
        let today = new Date();
        let stringTodayTime =
            ("0" + today.getHours()).slice(-2) + ":" + today.getMinutes();

        this.props.films.data.forEach((film) => {
            if (textInput === film.title) invalidFilmName = false;
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
        } else {
            const updatedFilmWithoutThisShow = films.data.find(
                (element) => element.title === this.state.textInput
            );
            const updatedcinemaHall = this.props.films.cinemaHalls.find(
                (element) =>
                    element.hallId === Number(this.state.cinemaHallInput)
            );
            const editedShowing = {
                showingId: this.state.showingId,
                date: this.state.dateInput,
                hour: this.state.timeInput,
                occupiedSeats: this.state.updatedShowing.occupiedSeats,
                cinemaHall: updatedcinemaHall,
                numberOfSeatsSold: this.state.updatedShowing.numberOfSeatsSold,
                numberOfAvaibleSeats:
                    this.state.updatedShowing.numberOfAvaibleSeats,
            };
            if (
                updatedFilmWithoutThisShow.id ===
                this.props.location.state.filmId
            ) {
                this.state.updatedFilm.showings.forEach(
                    (showing, showId, showTab) => {
                        if (showing.showingId === this.state.showingId)
                            showTab[showId] = editedShowing;
                        return showing;
                    }
                );
                this.props.editShowing(
                    this.state.updatedFilm,
                    this.props.location.state.filmId
                );
                this.setState({ status: true });
            } else {
                const newOldShowing = {
                    id: updatedFilmWithoutThisShow.id,
                    title: updatedFilmWithoutThisShow.title,
                    duration: updatedFilmWithoutThisShow.duration,
                    imgUrl: updatedFilmWithoutThisShow.imgUrl,
                    showings: [
                        ...updatedFilmWithoutThisShow.showings,
                        editedShowing,
                    ],
                };

                this.props.addShowing(
                    newOldShowing,
                    updatedFilmWithoutThisShow.id
                );
                const tmpElement = this.state.updatedFilm;
                tmpElement.showings = tmpElement.showings.filter(
                    (showing) => showing.showingId !== this.state.showingId
                );
                this.setState({
                    updatedFilm: tmpElement,
                });

                this.props.editShowing(
                    this.state.updatedFilm,
                    this.props.location.state.filmId
                );
                this.setState({ status: true });
            }
        }
    }

    render() {
        const { films } = this.props;
        const {
            textInput,
            dateInput,
            timeInput,
            status,
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
            <div className="EditShowing">
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
                        type="text"
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
                    <button
                        onClick={() => this.editShowingInShowingList(films)}
                    >
                        Edytuj
                    </button>
                </div>
            </div>
        );
    }
}

export default EditShowing;

EditShowing.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
        state: PropTypes.shape({
            modal: PropTypes.bool,
            todayDate: PropTypes.string,
        }).isRequired,
    }).isRequired,
    editShowing: PropTypes.func.isRequired,
    showShowingsOfThatDay: PropTypes.func.isRequired,
    films: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.array,
        loaded: PropTypes.bool,
    }).isRequired,
    getData: PropTypes.func.isRequired,
    addShowing: PropTypes.func.isRequired,
};
