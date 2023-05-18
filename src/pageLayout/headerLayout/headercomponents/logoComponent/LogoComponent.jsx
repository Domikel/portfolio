import './LogoComponent.css'
import { Link } from 'react-router-dom';




function Logo() {
  return (
    <div class="logo">
      <Link to="/home" >M</Link>
      <p>
        frontend <br />
        developer
      </p>
    </div>
  );
}

export default Logo;
