import PageLayout from '../pageLayout/PageLayout';
import './AboutPage.css';
import PersonalImage2 from '../imgs/anzug-background.jpg';

function AboutPage() {

  return <PageLayout>
    <div className="main-about-Left">
      <div>
        <h1 className="about-me-title">
          About <span className="me-title">Me</span>
        </h1>
      </div>
      <p className="about-text-intro">
       "I am a Fullstack Developer and a
        Psychology student at the Open University of Catalunya, pursuing my
        studies through distance learning. I have a passion for interface
        development, specifically focusing on UI (User Interface) design. I
        firmly believe that psychology plays a crucial role in creating
        applications and software with intuitive designs that effectively cater
        to the users' needs. My skill set is primarily rooted in Frontend
        Development, complemented by a solid understanding of psychology and its
        application in UX (User Experience) design for interface development. By
        combining my technical expertise and psychological knowledge, I strive
        to create user-centric designs that enhance the overall usability and
        satisfaction of software applications.""
      </p>
    </div>
    
    <div className="main-About-right">
      <div class="img-AboutContainer">
        <img
          className="img-about"
          src={PersonalImage2}
          width="290px"
          height="310px"
          alt="pesonal-foto"
        />
      </div>
    </div>
    
  </PageLayout>;
}

export default AboutPage;
