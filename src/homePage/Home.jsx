import PageLayout from "../pageLayout/PageLayout.jsx";
import PersonalImage from '../imgs/Personalfoto.png'

function HomePage() {
  const jsxLeft = (
    <>
      <span>&lt; Hi &gt;</span>
      <h1>
        I'm <span class="m">M</span>iguel,
      </h1>
      <h2>Web Developer</h2>
      <button>
        <a href="/contact/contact.html">Let´s Work Together!</a>
      </button>
    </>
  );

  const jsxRight = (
    <div class="img-container">
      <img
        src= {PersonalImage}
        width="300px"
        height="300px"
        alt="pesonal-foto"
      />
    </div>
  );

  return <PageLayout left={jsxLeft} right={jsxRight}></PageLayout>;
}

export default HomePage;
