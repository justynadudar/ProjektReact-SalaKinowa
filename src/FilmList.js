import './style/FilmList.css';
import Showing from "./Showing";
import AddFilm from "./AddFilm.js";
import Home from './Home.js';
import React from 'react';

class FilmList  extends React.Component {
  constructor(props) {
    super(props);
    this.addFilm = this.addFilm.bind(this);
    this.state = {films: [{
      title: "Piraci z Karaibów: Klątwa Czarnej Perły",
      duration: 143
      },{
      title: "Wyspa tajemnic",
      duration: 138
      },{
      title: "Człowiek demolka",
      duration: 113
  }]}}
  
    
      addFilm(text){
        const {dane} = this.state;
            return this.setState([...dane, {title: text}])
      }

    
      // componentDidMount() {
      // fetch(`http://localhost:3001/orders`, {
      //         method: 'post',
      //       headers:{
      //           'Content-Type': 'application/json',
      //           'Accept': 'application/json'
      //         },
      //       body: JSON.stringify({
      //           id: 3,
      //           title: "John Smith",
      //           duration: 110,
      //           imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/20/22/vintage-1706242_960_720.jpg",
      //           dates:  [],
      //           cinemaHallId: null
      //       })
      //   }).then(response => response.json())
      //   .then(data => this.setState({dane: data}));
        
      // }

      async add(){
          await fetch(`http://localhost:3001/orders`, {
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                        "id": "3",
                        "title": "John Smith",
                        "duration": "110",
                        "imgUrl": "https://cdn.pixabay.com/photo/2016/09/30/20/22/vintage-1706242_960_720.jpg",
                        "dates": "[]",
                        "cinemaHallId": "null"
                    })
          }).then(response => response.json())
          .then(() => {
              alert("Dodano użytkownika");
          }).catch((error) => {
            console.error(error);
          })
      }

     
        

       render(){
        const {dane} = this.state;
          return (
          
          <div>
            <Home/>
            <ul>
                {/* {dane.map((element) =>  <Showing film={element}/>)} */}
                <AddFilm handleClick={() => this.add()}/>
            </ul>
          </div>
        );
        }
        
      }

export default FilmList;