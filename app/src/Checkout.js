import React from "react";
import Showing from "./Showing";
import "./style/Checkout.css";
import { Link } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

class Checkout extends React.Component {
    componentDidMount() {
        this.props.getData();
        this.props.showShowingsOfThatDay();
    }

    render() {
        const { films } = this.props;

        return (
            <div className="Checkout">
                <div className="changeDayButtons">
                    <button>
                        <GrFormPreviousLink />
                    </button>
                    <p>06.12.2021</p>
                    <button>
                        <GrFormNextLink />
                    </button>
                </div>
                <div className="showings">
                    {films.loaded
                        ? films.data.map((film) => (
                              <Showing
                                  destination="Checkout"
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

export default Checkout;
