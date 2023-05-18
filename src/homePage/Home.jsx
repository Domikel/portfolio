import PageLayout from '../pageLayout/PageLayout.jsx';
import PersonalImage from '../imgs/Personalfoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
function HomePage() {
  const jsxLeftHome = (
    <>
      <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: '128px' }} />
      <span>&lt; Hi &gt;</span>
      <h1>
        I'm <span className="m">M</span>iguel,
      </h1>
      <h2>FrontendDeveloper</h2>
      <button>
        <a href="/contact/contact.html">Let´s Work Together!</a>
      </button>
    </>
  );

  const jsxRight = (
    <div class="img-container">
      <img
        src={PersonalImage}
        width="300px"
        height="300px"
        alt="pesonal-foto"
      />
    </div>
  );

  return <PageLayout left={jsxLeftHome} right={jsxRight}></PageLayout>;
}

export default HomePage;
