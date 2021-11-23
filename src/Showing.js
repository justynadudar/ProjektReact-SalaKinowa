import Film from "./Film.js";
function Showing({
    date,
    hour,
    film,
    cinemaHall,
    ticketsSold,
    ticketsAvailable,
    seats
  }) {
    
    return (
      <li><Film title={film.title} duration={film.duration}/> </li>
   
      );
  }
  
  export default Showing;