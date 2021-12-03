import React from "react";
import "./style/Repertoire.css";
import Home from "./Home.js";
import { connect } from "react-redux";
import { fetchData } from "./actions";

class Repertoire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.fetchData();
        this.setState({ data: this.props.dataReducer.data });
    }

    // componentDidMount() {
    //     fetch("http://localhost:3001/orders", {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ dane: data }));
    // }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Home />
                <div className="repertoire">
                    {!data.loading
                        ? data.map((element) => (
                              <div className="showing">
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
        fetchData: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repertoire);
