import React from "react";
import Showing from "./Showing";
import "./style/ShowingsList.css";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

class ShowingsList extends React.Component {
  componentDidMount() {
    this.props.getData();
    this.props.showShowingsOfThatDay();
  }

  render() {
    const { films } = this.props;

    return (
      <div className="showingsList">
        <div className="addShowingButton">
          <Link to="/addShowing">
            <BiAddToQueue />
          </Link>
        </div>
        <div className="showings">
          {films.loaded
            ? films.data.map((film) => (
                <Showing key={Math.random()} film={film} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default ShowingsList;
