import React from "react";
import "./style/Repertoire.css";

class Repertoire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.props.getData();
        console.log(this.state.data);
        this.setState({ data: this.props.films });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <div className="repertoire">
                    {data.loaded
                        ? data.data.map((element) => (
                              <div key={element.id} className="showing">
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

export default Repertoire;
