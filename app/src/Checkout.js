import React from "react";
import Showing from "./Showing";
import "./style/Checkout.css";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

class Checkout extends React.Component {
    componentDidMount() {
        this.props.getData();
        this.props.showShowingsOfThatDay();
    }

    render() {
        const { films } = this.props;

        return (
            <div className="Checkout">
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
