import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="ul-items">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
      <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
      <NavLink to="/projects">Projects</NavLink>
      </li>
    
      <li>
      <NavLink to="/curriculum">Curriculum</NavLink>
      </li>
      <li>
      <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
