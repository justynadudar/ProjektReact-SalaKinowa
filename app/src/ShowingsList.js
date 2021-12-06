import React from "react";
import Showing from "./Showing";
import "./style/ShowingsList.css";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import PropTypes from "prop-types";

class ShowingsList extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let string =
            today.getFullYear() +
            "-" +
            ("0" + (today.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + (today.getDate() + this.props.films.counter)).slice(-2);
        this.state = {
            stringToday: string,
        };
    }

    componentDidMount() {
        this.props.getData();
        this.props.showShowingsOfThatDay();
    }
    incrementCounter() {
        let today = new Date();
        let string =
            today.getFullYear() +
            "-" +
            ("0" + (today.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + (today.getDate() + this.props.films.counter + 1)).slice(-2);

        this.setState({
            stringToday: string,
        });
        this.props.incrementCounter();
        this.props.getData();
        this.props.showShowingsOfThatDay();
    }

    decrementCounter() {
        let today = new Date();
        let string =
            today.getFullYear() +
            "-" +
            ("0" + (today.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + (today.getDate() + this.props.films.counter - 1)).slice(-2);

        this.setState({
            stringToday: string,
        });
        this.props.decrementCounter();
        this.props.getData();
        this.props.showShowingsOfThatDay();
    }

    render() {
        const { films } = this.props;
        const string = this.state.stringToday;

        return (
            <div className="showingsList">
                <div className="changeDayButtons">
                    {films.counter !== 0 ? (
                        <button onClick={() => this.decrementCounter()}>
                            <GrFormPreviousLink />
                        </button>
                    ) : (
                        <button className="buttonToRemove"></button>
                    )}

                    <p>{string}</p>
                    <button onClick={() => this.incrementCounter()}>
                        <GrFormNextLink />
                    </button>
                </div>
                <div className="addShowingButton">
                    <Link
                        to={{
                            pathname: `/addShowing`,
                            state: { modal: true, todayDate: string },
                        }}
                    >
                        <BiAddToQueue />
                    </Link>
                </div>
                <div className="showings">
                    {films.loaded
                        ? films.data.map((film) => (
                              <Showing
                                  destination="ShowingList"
                                  key={Math.random()}
                                  film={film}
                              />
                          ))
                        : null}
                </div>
            </div>
        );
    }
}

export default ShowingsList;

ShowingsList.propTypes = {
    getData: PropTypes.func.isRequired,
    showShowingsOfThatDay: PropTypes.func.isRequired,
    films: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.array,
        loaded: PropTypes.bool,
    }).isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    addFilm: PropTypes.func.isRequired,
    addShowing: PropTypes.func.isRequired,
};
