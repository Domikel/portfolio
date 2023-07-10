import PageLayout from '../pageLayout/PageLayout.jsx';
import PersonalImage from '../imgs/3.png';
import { Link } from 'react-router-dom';
import './Home.css';

function HomePage() {
  return (
    <PageLayout>
      <div className="home-container-Left">
        <h1 className='greeting'>
          Hi<span className="greeting-exclamation"> !!</span>
          <br />
          I'm <span className="m-name-letter">M</span>iguel,
        </h1>
        <h2 className='profession-text'>Fullstack/Developer</h2>
        <button className='home-button'>
          <Link to="/contact" className="letwork-a">
            Let´s Work Together!
          </Link>
        </button>
      </div>

     <div className='home-container-right'>
        <div class="img-container">
          <img
          className='personal-image-home'
            src={PersonalImage}
            width="290px"
            height="320px"
            alt="pesonal-foto"
          />
      
         </div>
      </div>
    </PageLayout>
  );
}

export default HomePage;
