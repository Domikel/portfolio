import './LogoComponent.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div class="logo-container">
      <Link to="/home" className='mj-logo-letter'>M</Link> <br/> <br />
      <Link to="/home" className='p-logo-letter'>
        Frontend <br/>
        Developer
      </Link>
    </div>
  );
}

export default Logo;
