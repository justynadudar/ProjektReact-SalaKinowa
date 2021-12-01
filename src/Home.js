import './style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div class="Navbar">
        <Link to="/" class="linkHome">Home</Link>
        <Link to="/repertoire" class="link">Repertuar</Link>
        <Link to="/films" class="link">Filmy</Link>
        <Link to="/cinemahalls" class="link">Sale</Link>
      </div>
   
  );
}

export default Home;