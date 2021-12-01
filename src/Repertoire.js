import React from 'react';
import './style/Repertoire.css';
import Home from './Home.js';

class Repertoire  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dane: []};

}

componentDidMount(){
  fetch('http://localhost:3001/orders', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
      .then(response => response.json())
      .then(data => this.setState({dane: data}));
}



  render(){
    const {dane} = this.state;

    return (
      
      <div>
        <Home/>
        <div className="repertoire">
        
          {dane.map((element) =>
            <div className="showing">
              <img src={element.imgUrl} alt={element.title}/> 
              <div className="showingInformation">
              <p>Tytuł: {element.title}</p>
              <p>Czas trwania: {element.duration}</p>
              </div>
            </div>
            )}
        <button title="Dodaj seans"> + </button>   
        </div>
        
        
      </div>
    );
  }
  
  }
  
  export default Repertoire;