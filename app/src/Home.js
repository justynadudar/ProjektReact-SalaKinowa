import './style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="Navbar">
        <Link to="/" className="linkHome">Home</Link>
        <Link to="/repertoire" className="link">Repertuar</Link>
        <Link to="/films" className="link">Filmy</Link>
        <Link to="/cinemahalls" className="link">Sale</Link>
      </div>
   
  );
}

export default Home;