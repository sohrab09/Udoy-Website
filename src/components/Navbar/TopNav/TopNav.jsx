import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';


const TopNav = () => {
    return (
        <div className="nav-top" data-aos="fade-left">
            <div className="welcome-note">
                <p>Welcome to UDOY</p>
                <a href="tel:16631" style={{ textDecoration: "none" }}><p style={{ color: "#fff", marginLeft: "10px" }}><span><FontAwesomeIcon icon={faPhone} /></span> 16631</p></a>
            </div>
            <div className="tariff">
                <a href="http://www.udoyadn.com/wp-content/uploads/2023/01/BTRC_Tariff.pdf" target="_blank" style={{ textDecoration: "none", color: "#fff" }}>
                    <p>BTRC Approved Tariff</p>
                </a>
                <a href="" className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="" className="social-icon">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </div>
    )
}

export default TopNav