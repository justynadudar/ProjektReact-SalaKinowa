import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/BuyTicket.css";
import { BsArrowLeftShort } from "react-icons/bs";
import Error from "./Error";
import PropTypes from "prop-types";

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaHall: [],
      newOccupiedSeats: [],
      cinemaHallId: 0,
      updatedFilm: {},
      updatedShowing: {},
      showingId: Number(this.props.location.state.showingId),
      numberOfSeatsSold: 0,
      numberOfAvaibleSeats: 40,
      status: false,
      chooseError: false,
    };
  }

  componentDidMount() {
    this.props.getData();
    this.props.showShowingsOfThatDay();
    const tmpFilm = this.props.films.data.find(
      (element) => element.id === this.props.location.state.filmId
    );
    this.setState({ updatedFilm: tmpFilm });

    const tmpShowing = tmpFilm.showings.find(
      (element) => element.showingId === this.state.showingId
    );
    const tmpHall = tmpShowing.cinemaHall;
    this.setState({
      cinemaHallId: tmpHall.hallId,
    });
    console.log(tmpHall.body);
    tmpShowing.occupiedSeats.forEach((place) => {
      tmpHall.body.forEach((row, rowId, rowTab) => {
        if (place.row === rowId) {
          rowTab[rowId].forEach((seat, seatId, seatTab) => {
            if (place.place === seat.id) seatTab[seatId].id = "X";
            return seat;
          });
        }
        return row;
      });
      return place;
    });

    this.setState({
      updatedShowing: tmpShowing,
      numberOfSeatsSold: tmpShowing.numberOfSeatsSold,
      numberOfAvaibleSeats: tmpShowing.numberOfAvaibleSeats,
    });
    this.setState({ cinemaHall: tmpHall.body });
  }

  choosePlace(row1, place1) {
    //przypisuje do zmiennej pomocniczej sale kinowe ze stanu, następnie przechodzę po wierszach, następnie miejscach w poszukiwaniu klikniętego miejsca i toggluje jego stan isActive
    const tmpCinemaHall = this.state.cinemaHall;
    tmpCinemaHall.forEach((row, rowId, rowTab) => {
      if (row1 === rowId) {
        rowTab[rowId].forEach((seat, seatId, seatTab) => {
          if (place1.id === seat.id)
            seatTab[seatId].isActive = !seatTab[seatId].isActive;
          return seat;
        });
      }
      return row;
    });
    this.setState({ cinemaHall: tmpCinemaHall });
  }

  buyTicket() {
    const tmpupdatedShowing = this.state.updatedShowing;
    let chooseError = false;
    this.setState({ chooseError: false });
    let counter = 0;

    const tmpCinemaHall = this.state.cinemaHall;
    tmpCinemaHall.forEach((row, rowId, rowTab) => {
      rowTab[rowId].forEach((seat, seatId, seatTab) => {
        if (seat.isActive !== true) {
          counter++;
        }
      });
    });

    if (counter === tmpupdatedShowing.cinemaHall.capacity) {
      chooseError = true;
    }

    if (chooseError) {
      this.setState({ chooseError: true });
    } else {
      const tmpupdatedShowing = this.state.updatedShowing;

      //przechodze po wszystkich zaznaczonych miejscach i dodaje je w zajętych miejscach danego seansu
      const tmpCinemaHall = this.state.cinemaHall;
      tmpCinemaHall.forEach((row, rowId, rowTab) => {
        rowTab[rowId].forEach((seat, seatId, seatTab) => {
          if (seat.isActive === true) {
            tmpupdatedShowing.occupiedSeats = [
              ...tmpupdatedShowing.occupiedSeats,
              { row: rowId, place: seat.id },
            ];
          }
          return seat;
        });
        return row;
      });

      this.state.updatedFilm.showings.forEach((showing, showId, showTab) => {
        if (showing.showingId === this.state.showingId)
          showTab[showId] = tmpupdatedShowing;
        return showing;
      });

      this.props.editShowing(
        this.state.updatedFilm,
        this.props.location.state.filmId
      );
      this.setState({ status: true });
      this.props.getData();
      this.props.showShowingsOfThatDay();
    }
  }

  render() {
    const { cinemaHall, status, cinemaHallId } = this.state;
    if (status === true) return <Redirect to="/" />;
    return (
      <div className="BuyTicket">
        <div>
          <Link to="/">
            <BsArrowLeftShort />
          </Link>
          <h2>Kup bilet / Sala {cinemaHallId}</h2>
          <div className="cinemaHall">
            {console.log(cinemaHall)}
            {cinemaHall.map((row, rowNumber) => (
              <div key={Math.random()} className="row">
                {row.map((place, placeNumber) => {
                  return place.id === "X" ? (
                    <button
                      onClick={() => this.choosePlace(rowNumber, place)}
                      key={Math.random()}
                      className="X"
                    >
                      {place.id}
                    </button>
                  ) : (
                    <button
                      onClick={() => this.choosePlace(rowNumber, place)}
                      key={Math.random()}
                      className={place.isActive ? "clicked" : "place"}
                    >
                      {place.id}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <Error
            error={this.state.chooseError}
            info="Musisz wybrać jakieś miejsce!"
          />
          <button onClick={() => this.buyTicket()}>Kup bilet</button>
        </div>
      </div>
    );
  }
}

export default BuyTicket;

BuyTicket.propTypes = {
  editShowing: PropTypes.func.isRequired,
  showShowingsOfThatDay: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
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
  films: PropTypes.shape({
    error: PropTypes.string,
    data: PropTypes.array,
    loaded: PropTypes.bool,
  }).isRequired,
};
