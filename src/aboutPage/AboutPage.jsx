import PageLayout from "../pageLayout/PageLayout";
import './AboutPage.css'

function AboutPage() {
  const jsxLeftAbout = (
    <>
      <h1 className="about-text">
        About<span className="me-from-about">Me</span>
      </h1>

      
    </>
  );
  const jsxRightAbout=(<p className="p-left">
     
  "I'm a psychology student and a beginner in web development.
  Multidimensional customer care specialist with 8 years of working
  experience in delivering customer satisfaction across hospitality,
  travel, and health industries. Specialized in mitigating human emotions
  in high-stress, time-sensitive situations and ensuring high customer
  retention. Driven to create impact in a multinational environment and
  facilitate exceptional customer experiences"
</p>

  )



    return (
        <PageLayout left={jsxLeftAbout} right={jsxRightAbout}>

        </PageLayout>
    )
}

export default AboutPage;
