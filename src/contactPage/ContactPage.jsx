import './ContactPage.css';
import PageLayout from '../pageLayout/PageLayout';
import BerlinMap from '../imgs/1.png';

function ContactPage() {
  return (
    <PageLayout>
    <div className='main-contact-left'>
        <h1 className="contact-title">
          Contact <span className="me-from-contact">Me</span>
        </h1>
        <div className='map-container'>

            <p className="mail">
            im.mikel@hotmail.com</p>
            <img src={BerlinMap} width="80%" alt="berlin-map" />
        </div>
    </div>
      
      

    <div className='main-Contact-right'>
        <form className='form-contact'>
        <p className="p-contact">
            I am very excited to hear about you projects and be part of your
            team ! 
          </p>

       
        <input className='contact-input' type="text" id="name" placeholder="Your Name" />
        <input className='contact-input'type="email"name="email"id="email"placeholder="Your Email"/>

        
        <input  className='contact-input' type="text" id="subject" placeholder="Subject" />

        <textarea  className="contact-textarea" name=""id="" cols="77" rows="10"placeholder="Tell me more about you and your projects!"></textarea>
          <button className="get-in-touch-button">Get in Touch!</button>
        </form>
    </div>
    
    
    </PageLayout>
  );
}

export default ContactPage;
