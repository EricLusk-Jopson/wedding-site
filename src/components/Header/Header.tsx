import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/venue">Venue</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/rsvp">RSVP</NavLink>
          </li>
          <li>
            <NavLink to="/registry">Registry</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
