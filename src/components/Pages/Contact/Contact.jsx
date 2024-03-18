import { useState } from 'react';
import './Contact.css';
import shadow1 from '../../../assets/10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faFacebook, faGooglePlusG, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Post } from '../../../https/https';


const Contact = () => {

    document.title = "Contact | Udoy Internet"

    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });





    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            FirstName: contactInfo.firstName,
            LastName: contactInfo.lastName,
            Email: contactInfo.email,
            Mobile: contactInfo.phone,
            Subject: contactInfo.subject,
            Body: contactInfo.message
        }

        console.log("data ---------->>>>>>", data);

        try {
            Post('/api/UdoySiteApi/EmailSend', data)
                .then((res) => {
                    console.log(res)
                })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <section className="page-title" style={{ backgroundImage: `url(${shadow1})` }}>
                <div className="auto-container">
                    <h2>Contact us</h2>
                </div>
            </section>

            <section className="contact-page-section">
                <div className="auto-container">
                    <div className="contact-details-container">

                        <div className="info-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="title-box">
                                    <h4>Contact Details</h4>
                                </div>
                                <div className="lower-box">
                                    <ul className="info-list">
                                        <li>
                                            <span className="icon flaticon-map"><FontAwesomeIcon icon={faLocationCrosshairs} /></span>
                                            11, Navana Shefali, 5th Floor, 5-D, <br />Road# 14, Gulshan-1,Dhaka-1213
                                        </li>
                                        <li>
                                            <span className="icon flaticon-call"><FontAwesomeIcon icon={faPhone} /></span>
                                            <a href="tel:16631" style={{ marginTop: '15px' }}>16631</a>
                                        </li>
                                        <li>
                                            <span className="icon flaticon-email-1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <a href="mailto:info@udoyadn.com">info@udoyadn.com</a><br />
                                            <a href="http://www.udoyadn.com/" target="_blank">udoyadn.com</a>
                                        </li>
                                    </ul>
                                    <div className="timing">Working hours 08:00 AM - 10:00 PM</div>

                                    <ul className="social-box">
                                        <li className="facebook"><a href="#" className="fa fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li className="twitter"><a href="#" className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li className="google"><a href="#" className="fa fa-google"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                        <li className="dribbble"><a href="#" className="fa fa-dribbble"><FontAwesomeIcon icon={faDribbble} /></a></li>
                                        <li className="linkedin"><a href="#" className="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                        <li className="pinterest"><a href="#" className="fa fa-pinterest-p"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="map-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="map-outer">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.1932005073035!2d90.41310272845473!3d23.77976622589635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710396774110!5m2!1sen!2sbd" style={{ border: 0 }} allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="contact-form-box">
                        <div className="form-title-box">
                            <h3>Send a Message</h3>
                        </div>

                        <div className="contact-form">
                            <form id="contact-form">
                                <div className="row">

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            name='firstName'
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            name='lastName'
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            name='email'
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            required
                                            name='phone'
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            required
                                            name='subject'
                                            onChange={handleInput}
                                        />
                                    </div>


                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea
                                            name="message"
                                            placeholder="Write Your Message..."
                                            required
                                            onChange={handleInput}
                                        ></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                                        <button className="theme-btn btn-style-four" type="submit" name="submit-form" onClick={handleSubmit}><span className="txt">Submit Now</span></button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Contact