import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="ul-items">
      <li className="li-items">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="li-items">
      <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className="li-items">
      <NavLink to="/projects">Projects</NavLink>
      </li>
    
      <li className="li-items">
      <NavLink to="/curriculum">Curriculum</NavLink>
      </li>
      <li className="li-items">
      <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
