import React from "react";
import Showing from "./Showing";
import "./style/ShowingsList.css";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

class ShowingsList extends React.Component {
  componentDidMount() {
    this.props.getData();
    this.props.showShowingsOfThatDay();
  }

  render() {
    const { films } = this.props;

    return (
      <div className="showingsList">
        <div className="changeDayButtons">
          <button>
            <GrFormPreviousLink />
          </button>
          <p>06.12.2021</p>
          <button>
            <GrFormNextLink />
          </button>
        </div>
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
