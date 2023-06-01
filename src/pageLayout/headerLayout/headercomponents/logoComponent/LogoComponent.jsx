import './LogoComponent.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div class="logo">
      <Link to="/home" className='mj'>M</Link> <br/> <br />
      <Link to="/home" className='p'>
        Frontend <br/>
        Developer
      </Link>
    </div>
  );
}

export default Logo;
