import Repertoire from "./Repertoire";

function Cinema() {
  
    let cinemaHalls = [{
        id: 0,
        capacity: 100
      }, {
        id: 1,
        capacity: 50
      }];
  
  return (
    <div>
      <Repertoire/>
    </div>
  );
}

export default Cinema;