import { faFacebookMessenger, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ContactTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactTeam = () => {
    return (
        <section className="contact-channel py-5 common-curve">
            <div className="container">
                <div className="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h2 className="heading" data-wow-delay=".1s" >Contact Team UDOY</h2>
                    <p className="sub-heading" data-wow-delay=".2s" >We try and sort out any issues before you’re even aware of them. But if you ever need us, there are a bunch of ways you can get in touch.</p>
                </div>
                <div className="contact-row justify-content-center" data-aos="zoom-in">
                    <div className="col-7">
                        <ul className="contact-item">
                            <li>
                                <a href="tel:16631"><FontAwesomeIcon icon={faWhatsapp} className='contact-icon whatsapp' /> Text Hi to 16631</a>
                            </li>
                            <li>
                                <a href="tel:16631"><FontAwesomeIcon icon={faPhone} className='contact-icon phone' /> Call 16631</a>
                            </li>
                            <li>
                                <a href="https://m.me/udoyadn"><FontAwesomeIcon icon={faFacebookMessenger} className='contact-icon messenger' /> Message us in Facebook</a>
                            </li>
                            <li>
                                <a href="mailto:info@udoyadn.com"><FontAwesomeIcon icon={faEnvelope} className='contact-icon email' /> Email us</a>
                            </li>
                            <li>
                                <a href=""><FontAwesomeIcon icon={faInstagram} className='contact-icon instagram' />Instagram Message</a>
                            </li>
                            <li>
                                <a href="tel:16631"><FontAwesomeIcon icon={faHeadset} className='contact-icon hotline' /> Hotline 16631</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactTeam