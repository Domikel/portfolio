import PageLayout from "../pageLayout/PageLayout";
import './AboutPage.css'
import PersonalImage2 from '../imgs/anzug-background.jpg'

function AboutPage() {
  const jsxLeftAbout = (
    <div className="main-AboutLeft">

      <h1 className="about-text">
        About <span className="me-from-about">Me</span>
      </h1>
      <p className="p-left">

        Welcome to a world where design meets psychology,
         crafting captivating user experiences. I'm Miguel,
          a digital design student and frontend developer,
           eager to share my skills and experiences with you. 
           Let's explore how the fusion of creativity, technology,
            and psychology can shape remarkable digital journeys.
      </p>

    </div>
  );
  const jsxRightAbout = (
    <div className="main-AboutRight">
      <div class="img-AboutContainer">
        <img className="img-about"
          src={PersonalImage2}
          width="290px"
          height="310px"
          alt="pesonal-foto"
        />
      </div>

    </div>

  )



  return (
    <PageLayout left={jsxLeftAbout} right={jsxRightAbout}>

    </PageLayout>
  )
}

export default AboutPage;
