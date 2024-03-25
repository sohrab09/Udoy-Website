import about from '../../../assets/about-us.mp4'
import './About.css';
import bg2 from '../../../assets/2.jpg'
import network3 from '../../../assets/network-3.png'
import network4 from '../../../assets/network-4.jpg'
import network5 from '../../../assets/network-5.jpg'
import { faLock, faTowerBroadcast, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const About = () => {

    document.title = "About | Udoy Internet"

    return (
        <>
            <section className="video-section">
                <video autoPlay loop muted playsInline className="video-background">
                    <source src={about} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-container">
                    <h1>About Us</h1>
                </div>
            </section>

            <section className='network-section'>
                <main>
                    <div className="parallax">
                        <div className="parallax-content">
                            <h2>Welcome to <span className='udoy-text'>Udoy</span> Internet</h2>
                            <br />
                            <br />
                            <p><span className='udoy-text'>Udoy</span> ADN is a Super Fast & Reliable Faster Network. <span className='udoy-text'>Udoy</span> provides an extensive range of high quality internet connectivity services throughout the country.</p>
                            <br />
                            <br />
                            <p>We are dedicated to serving customers. We achieve this not only through our extensive portfolio of internet connectivity. <span className='udoy-text'>Udoy</span>, ADN Telecom is a concern of ADN Group, a conglomerate comprising 10 companies across diverse industries.</p>
                        </div>
                    </div>
                </main>
            </section>

            <section className="network-section style-two" style={{ backgroundImage: `url(${bg2})` }}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="about-row">
                            <div className="images-column col-lg-7 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image" data-aos="fade-right">
                                        <img src={network4} alt="" />
                                    </div>
                                    <div className="image-two" data-aos="fade-left">
                                        <img src={network5} alt="" />
                                    </div>
                                    <div className="image-three" data-aos="fade-up">
                                        <img src={network3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <div className="separator"></div>
                                        <h1 className='slug'>We Provide Best Home Network For You.</h1>
                                        <div className="text">
                                            Business is the activity of making ones living or making money
                                            by producing or buying and selling products
                                        </div>
                                    </div>
                                    <ul className="network-list">
                                        <li>
                                            <span className="icon flaticon-tick-1"><FontAwesomeIcon icon={faWifi} /></span>
                                            <strong>A Reliable Connection</strong>
                                            Creating Trustworthy Links: Building Reliable Connections for Seamless Communication.
                                        </li>
                                        <li>
                                            <span className="icon flaticon-tick-1"><FontAwesomeIcon icon={faLock} /></span>
                                            <strong>Powerful Secure Internet</strong>
                                            Ensuring Robust Security Measures for a Powerful and Secure Internet Experience, Safeguarding Data and Privacy.
                                        </li>
                                        <li>
                                            <span className="icon flaticon-tick-1"><FontAwesomeIcon icon={faTowerBroadcast} /></span>
                                            <strong>Flex 4K &amp; 8K streaming</strong>
                                            Flex 4K & 8K Streaming on a Powerful, Secure Internet, Redefining Your Viewing Experience with Unmatched Clarity and Immersion.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About