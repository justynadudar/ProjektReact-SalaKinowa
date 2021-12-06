import React from "react";
import Showing from "./Showing";
import "./style/Checkout.css";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

class Checkout extends React.Component {
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
      <div className="Checkout">
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
