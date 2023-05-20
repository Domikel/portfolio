import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="ul-items">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <a href="/about/about.html">My Skills</a>
      </li>
      <li>
        <a href="/about/about.html">Work</a>
      </li>
      <li>
        <a href="/contact/contact.html">Contact</a>
      </li>
      <li>
        <a href="/curriculum/curriculum.html">Curriculum</a>
      </li>
    </ul>
  );
}

export default NavBar;
