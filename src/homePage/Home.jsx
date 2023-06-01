import PageLayout from '../pageLayout/PageLayout.jsx';
import PersonalImage from '../imgs/3.png';
import { Link } from 'react-router-dom';
import './Home.css';

function HomePage() {
  const jsxLeftHome = (
    <>
      <span>Hi,</span>
      <h1>
        I'm <span className="m">M</span>iguel,
      </h1>
      <h2>Frontend/Developer</h2>
      <button>
        <Link to="/contact/contact.html">Let´s Work Together!</Link>
      </button>
    </>
  );

  const jsxRight = (
    <div class="img-container">
      <img
        src={PersonalImage}
        width="290px"
        height="320px"
        alt="pesonal-foto"
      />
    </div>
  );

  return <PageLayout left={jsxLeftHome} right={jsxRight}></PageLayout>;
}

export default HomePage;
