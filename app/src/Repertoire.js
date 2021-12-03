import React from "react";
import "./style/Repertoire.css";
import Home from "./Home.js";
import { connect } from "react-redux";
import { getData } from "./actions";

class Repertoire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.getData();
        console.log(this.props.films.data)
        this.setState({ data: this.props.films.data });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Home />
                <div className="repertoire">
                    {!data.loading
                        ? data.map((element) => (
                              <div  key={element.id} className="showing">
                                  <img
                                      src={element.imgUrl}
                                      alt={element.title}
                                  />
                                  <div className="showingInformation">
                                      <p>Tytuł: {element.title}</p>
                                      <p>Czas trwania: {element.duration}</p>
                                  </div>
                              </div>
                          ))
                        : null}
                    <button title="Dodaj seans"> + </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repertoire);
