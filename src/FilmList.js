import './style/FilmList.css';
import Showing from "./Showing";
import AddFilm from "./AddFilm.js";
import { useEffect, useState } from "react";
import Home from './Home.js';
import Repertoire from './Repertoire';

function FilmList() {
  
    let [films, setFilms] = useState(
        [{
            title: "Piraci z Karaibów: Klątwa Czarnej Perły",
            duration: 143
            },{
            title: "Wyspa tajemnic",
            duration: 138
            },{
            title: "Człowiek demolka",
            duration: 113
        }]);
    
        function addFilm(text){
            setFilms([...films, {title: text}])
        //     fetch('http://localhost:3001/orders', {
        //       method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //       },
        //     body: JSON.stringify({
        //         id: 3,
        //         title: "John Smith",
        //         duration: 110,
        //         imgUrl: "https://cdn.pixabay.com/photo/2016/09/30/20/22/vintage-1706242_960_720.jpg",
        //         dates:  [],
        //         cinemaHallId: null
        //     })
        // }).then(response => response.json())
        // .then(data => {
        //   console.log('Success:', data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
      }

        // useEffect(() => {
        //   fetch('http://localhost:3001/orders', {
        //     headers : {
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      }})
        //       .then(response => response.json())
        //       .then(data => this.setState({films: data}));
        // })
        
        return (
          
          <div>
            <Home/>
            <ul>
                {films.map((element) =>  <Showing film={element}/>)}
                <AddFilm handleClick={addFilm}/>
            </ul>
          </div>
        );
      }

export default FilmList;