
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Weather">Weather</Link></li>
        <li><Link to="/">News</Link></li>
      </ul>
    </nav>
  );
}
