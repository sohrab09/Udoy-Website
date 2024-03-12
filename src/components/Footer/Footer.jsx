import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col" data-aos="fade-left">
                        <img src={logo} alt="" style={{ width: "250px", height: "150px" }} />
                        <h3 style={{ color: '#fff', marginTop: '10px', fontSize: '30px' }}>UDOY</h3>
                        <h3 style={{ color: '#fff', marginTop: '10px' }}>A Brand of ADN Telecom Ltd.</h3>
                    </div>
                    <div className="footer-col" data-aos="fade-right">
                        <h4>Address</h4>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faLocationDot} /> House-11, NAVANA SHEFALI, 5TH FLOOR, 5-D, <br /> ROAD-14, GULSHAN-1, Dhaka-1213</a></li>
                            <br />
                            <li><a href="tel:16631"><FontAwesomeIcon icon={faPhone} /> Call: 16631</a></li>
                            <br />
                            <li><a href="mailto:info@udoyadn.com"><FontAwesomeIcon icon={faEnvelope} /> Email : info@udoyadn.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col" data-aos="fade-down-right">
                        <h4>Quick Link</h4>
                        <ul>
                            <li><a href="#">Home Internet</a></li>
                            <li><a href="#">SME Internet</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li></ul>
                    </div>
                    <div className="footer-col" data-aos="fade-down-left">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <p>© {new Date().getFullYear()} UDOY. All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer