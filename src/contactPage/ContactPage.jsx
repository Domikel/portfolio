import './ContactPage.css'
import PageLayout from '../pageLayout/PageLayout'
import BerlinMap from '../imgs/1.png'


function ContactPage() {
    const jsxLeftContact = (
        <div className='main-ContactLeft'>
            <h1 className="contactme">Contact <span className='me'>Me</span></h1>

            <form>
                <p className="p-left">I am very excited to hear about your projects and be part of your team in do bridges between mind and code to optimize services experiences.</p>

                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Your Name" />

                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Your Email" />

                <label htmlFor="subject"></label>
                <input type="text" id="subject" placeholder="Subject" />

                <textarea name="" id="" cols="77" rows="10" placeholder="Tell me more about you and your projects!"></textarea>

                <button className='get-in-touch'>Get in Touch!</button>
            </form>
        </div>
    )

    const jsxRightContact= (
    <div className="main-ContactRight">       
        <h2 className='m-location'>M</h2>
        <p className="mail">im.mikel@hotmail.com</p>
        <div><img src={BerlinMap} width="90%"alt='berlin-map'/></div>
    </div>)

    return (<PageLayout left={jsxLeftContact} right={jsxRightContact}></PageLayout>)

}


export default ContactPage