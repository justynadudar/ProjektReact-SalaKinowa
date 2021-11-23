import Showing from "./Showing";
import AddFilm from "./AddFilm.js";
import { useState } from "react";

function Repertoire() {

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
    }
    
    return (
      <div>
        <ul>
            {films.map((element) =>  <Showing film={element}/>)}
            <AddFilm handleClick={addFilm}/>
        </ul>
      </div>
    );
  }
  
  export default Repertoire;