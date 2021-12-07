import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/BuyTicket.css";
import { BsArrowLeftShort } from "react-icons/bs";
// import PropTypes from "prop-types";

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaHall: [],
      cinemaHallId: 0,
      updatedFilm: {},
      updatedShowing: {},
      showingId: Number(this.props.location.state.showingId),
      numberOfSeatsSold: 0,
      numberOfAvaibleSeats: 40,
      status: false,
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
    const tmpHall = this.props.films.cinemaHalls.find(
      (element) => element.hallId === tmpShowing.cinemaHall.hallId
    );
    this.setState({
      cinemaHallId: tmpHall.hallId,
    });

    const tmpCinemaHall = tmpHall.body;

    console.log(tmpCinemaHall);
    tmpShowing.occupiedSeats.forEach((place) => {
      tmpCinemaHall.forEach((row, rowId, rowTab) => {
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
    this.setState({ cinemaHall: tmpCinemaHall });
  }

  choosePlace(row, place) {
    const newOccupiedPlace = {
      row: row,
      place: place.id,
    };

    const tmpupdatedShowing = this.state.updatedShowing;

    tmpupdatedShowing.occupiedSeats = [
      ...tmpupdatedShowing.occupiedSeats,
      newOccupiedPlace,
    ];
    tmpupdatedShowing.numberOfSeatsSold = this.state.numberOfSeatsSold + 1;
    tmpupdatedShowing.numberOfAvaibleSeats =
      this.state.numberOfAvaibleSeats - 1;

    this.setState({
      numberOfSeatsSold: tmpupdatedShowing.numberOfSeatsSold,
      numberOfAvaibleSeats: tmpupdatedShowing.numberOfAvaibleSeats,
    });

    this.setState({ updatedShowing: tmpupdatedShowing });

    const tmpCinemaHall = this.state.cinemaHall;
    tmpCinemaHall.forEach((row, rowId, rowTab) => {
      if (newOccupiedPlace.row === rowId) {
        rowTab[rowId].forEach((seat, seatId, seatTab) => {
          if (newOccupiedPlace.place === seat.id)
            seatTab[seatId].isActive = true;
          return seat;
        });
      }
      return row;
    });

    this.setState({ cinemaHall: tmpCinemaHall });
  }

  buyTicket() {
    this.state.updatedFilm.showings.forEach((showing, showId, showTab) => {
      if (showing.showingId === this.state.showingId)
        showTab[showId] = this.state.updatedShowing;
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
          <button onClick={() => this.buyTicket()}>Kup bilet</button>
        </div>
      </div>
    );
  }
}

export default BuyTicket;

// BuyTicket.propTypes = {
//     addFilm: PropTypes.func.isRequired,
//     getData: PropTypes.func.isRequired,
// };
