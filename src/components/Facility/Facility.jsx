import bgImage from '../../assets/pattern-5.png'
import shadow1 from '../../assets/shadow-3.png'
import shadow2 from '../../assets/shadow-4.png'
import map from '../../assets/map-1.png'
import './Facility.css';
import { faCloudArrowDown, faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Facility = () => {
    return (
        <section className="internet-section-four" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="shadow-layer-one" style={{ backgroundImage: `url(${shadow1})` }}></div>
            <div className="shadow-layer-two" style={{ backgroundImage: `url(${shadow2})` }}></div>
            <div className="auto-container">
                <div className="sec-title-three light centered" data-aos="fade-down">
                    <h2>UDOY Internet <br /> Don’t Suffer The Buffer</h2>
                </div>
                <div className="content-row">

                    <div className="content-column col-lg-6 col-md-12 col-sm-12" data-aos="fade-up-right">
                        <div className="inner-column">

                            <div className="internet-block">
                                <div className="inner-box">
                                    <div className="content">
                                        <span className="icon flaticon-play-button-1"><FontAwesomeIcon icon={faPlay} /></span>
                                        <h4><a href="">Limitless Entertainment</a></h4>
                                        <div className="text">Amet minim mollit non deserunt amet sint. Velit officia consequat duis enim velit  minim mollit non deserunt amet sint.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="internet-block">
                                <div className="inner-box wow fadeInLeft animated">
                                    <div className="content">
                                        <span className="icon flaticon-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                        <h4><a href="">Find Everything Your</a></h4>
                                        <div className="text">Amet minim mollit non deserunt amet sint. Velit officia consequat duis enim velit  minim mollit non deserunt amet sint.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="internet-block">
                                <div className="inner-box wow fadeInLeft animated">
                                    <div className="content">
                                        <span className="icon flaticon-upload"><FontAwesomeIcon icon={faCloudArrowDown} /></span>
                                        <h4><a href="">Upload As Fast As Downloads</a></h4>
                                        <div className="text">Amet minim mollit non deserunt amet sint. Velit officia consequat duis enim velit  minim mollit non deserunt amet sint.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12" data-aos="fade-up-left">
                        <div className="inner-column">
                            <div className="image">
                                <img src={map} alt="" className='map-image' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Facility