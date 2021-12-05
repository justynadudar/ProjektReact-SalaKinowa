import React from "react";
import Modyfication from "./Modyfication";
import Showing from "./Showing";
import "./style/ShowingsList.css";

class ShowingsList extends React.Component {
  componentDidMount() {
    this.props.getData();
    this.props.showShowingsOfThatDay();
  }

  render() {
    const { films } = this.props;

    return (
      <div className="showingsList">
        <Modyfication
          key={Math.random()}
          films={this.props.films}
          addShowing={this.props.addShowing}
        />
        <div className="showings">
          {films.loaded
            ? films.data.map((showing) => (
                <Showing key={Math.random()} film={showing} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default ShowingsList;
