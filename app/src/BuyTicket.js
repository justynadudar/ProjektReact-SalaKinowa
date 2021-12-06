import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style/BuyTicket.css";
import { BsArrowLeftShort } from "react-icons/bs";
// import PropTypes from "prop-types";

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaHall: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
      ],
      updatedFilm: {},
      updatedShowing: {},
      showingId: Number(this.props.location.state.showingId),
      status: false,
    };
    this.state.updatedFilm = this.props.films.data.find(
      (element) => element.id === this.props.location.state.filmId
    );

    console.log(this.state.updatedFilm);
    this.state.updatedShowing = this.state.updatedFilm.showings.find(
      (element) => element.showingId === this.state.showingId
    );
    console.log(this.state.updatedShowing);
  }

  componentDidMount() {
    this.props.getData();
  }

  choosePlace(row, place) {
    console.log(this.state.updatedFilm);
    const newOccupiedPlace = {
      row: row,
      place: place,
    };
    this.state.updatedShowing.occupiedSeats = [
      ...this.state.updatedShowing.occupiedSeats,
      newOccupiedPlace,
    ];
    this.state.updatedShowing.numberOfSeatsSold++;
    this.state.updatedShowing.numberOfAvaibleSeats--;
  }

  buyTicket() {
    console.log(this.state.updatedFilm);
    this.state.updatedFilm.showings.forEach((showing, showId, showTab) => {
      if (showing.showingId === this.state.showingId)
        showTab[showId] = this.state.updatedShowing;
      return showing;
    });

    this.props.editShowing(
      this.state.updatedFilm,
      this.props.location.state.filmId
    );
    this.props.getData();
    this.props.showShowingsOfThatDay();
    this.setState({ status: true });
  }

  render() {
    const { cinemaHall, status } = this.state;
    if (status === true) return <Redirect to="/" />;
    return (
      <div className="BuyTicket">
        <div>
          <Link to="/">
            <BsArrowLeftShort />
          </Link>
          <h2>Kup bilet / Sala 1</h2>
          <div className="cinemaHall">
            {cinemaHall.map((row, rowNumber) => (
              <div key={Math.random()} className="row">
                {row.map((place, placeNumber) => {
                  return (
                    <button
                      onClick={() => this.choosePlace(rowNumber, place)}
                      key={Math.random()}
                      className="place"
                    >
                      {placeNumber + 1}
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
