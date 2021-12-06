import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style/BuyTicket.css";
import { BsArrowLeftShort } from "react-icons/bs";
import Error from "./Error";
import PropTypes from "prop-types";

function BuyTicket({}) {
    let history = useHistory();
    let cinemaHall = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
    ];

    function buyTicket() {
        history.push("/");
    }

    return (
        <div className="BuyTicket">
            <div>
                <Link to="/">
                    <BsArrowLeftShort />
                </Link>
                <h2>Kup bilet / Sala 1</h2>
                <div className="cinemaHall">
                    {cinemaHall.map((row, rowNumber) => (
                        <div className="row">
                            {row.map((place, placeNumber) => {
                                return (
                                    <div className="place">
                                        {placeNumber + 1}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <button onClick={buyTicket}>Kup bilet</button>
            </div>
        </div>
    );
}

export default BuyTicket;

// BuyTicket.propTypes = {
//     addFilm: PropTypes.func.isRequired,
//     getData: PropTypes.func.isRequired,
// };
