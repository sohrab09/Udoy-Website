import './HomeInternet.css';
import Lottie from "lottie-react";
import animation1 from '../../../assets/animation1.json';
import animation3 from '../../../assets/animation3.json';
import pattern from '../../../assets/pattern-7.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';


const packageNames = ['Padma', 'Meghna', 'Jamuna', 'Surma', 'Teesta', 'Karnaphuli', 'Madhumoti', 'Brahmaputra', 'Dhaleshwari', 'Shitalakshya', 'Dakatia', 'Rupsha'];
const packagePrices = [500, 620, 700, 800, 1000, 1200, 1600, 2000, 2400, 4400, 6000, 8000];
const packageSpeeds = [6, 9, 10, 12, 20, 25, 35, 45, 50, 100, 150, 200];

const packages = packageNames.map((name, index) => ({
    id: index + 1,
    packageName: name,
    packagePrice: packagePrices[index],
    packageUnit: 'Per Month',
    packageSpeed: `${packageSpeeds[index]} MBPS`,
    packageFeature: [
        { id: 1, feature: 'Unlimited Facebook' },
        { id: 2, feature: 'Unlimited Youtube' },
        { id: 3, feature: 'Unlimited BDIX' },
    ],
}));

const renderIcon = (id) => {
    switch (id) {
        case 1:
            return <FontAwesomeIcon icon={faFacebook} />;
        case 2:
            return <FontAwesomeIcon icon={faYoutube} />;
        case 3:
            return <FontAwesomeIcon icon={faDownload} />;
        default:
            return null;
    }
}

const HomeInternet = () => {

    document.title = "Home | Udoy Internet"

    const [renderIndex, setRenderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRenderIndex(prevIndex => (prevIndex + 1) % 12);
        }, 3000);

        return () => clearInterval(interval);
    }, []);




    return (
        <section className='home-internet'>

            <div className='package-container' style={{ backgroundImage: `url(${pattern})` }}>
                <div className="home-container-first">
                    <div className="lottie-animation">
                        <Lottie animationData={animation1} loop={true} style={{ width: '350px', height: '350px' }} />
                    </div>
                    <div>
                        <h1 className="pricing-title">Home Internet Packages</h1>
                    </div>
                    <div className="lottie-animation">
                        <Lottie animationData={animation3} loop={true} style={{ width: '350px', height: '350px' }} />
                    </div>
                </div>
            </div>

            {/* Price Lists */}
            <section className='price-body'>

                <div className="price-container">

                    {
                        packages.map((item, index) => {
                            return (
                                <div className="column" key={index}>
                                    <div className=
                                        {`pricing-card 
                                              ${index % 4 === renderIndex % 4 ? 'basic' :
                                                index % 4 === (renderIndex + 1) % 4 ? 'eco' :
                                                    index % 4 === (renderIndex + 2) % 4 ? 'pro' : 'business'}
                                        `}>
                                        <div className="pricing-header">
                                            <span className="plan-title">{item.packageName}</span>
                                            <div className="price-circle">
                                                <span className="price-title">
                                                    <strong>৳</strong><span> {item.packagePrice}</span>
                                                </span>
                                                <span className="info">/ Month</span>
                                            </div>
                                        </div>
                                        <div className="badge-box">
                                            <span>{item.packageUnit}</span>
                                        </div>
                                        <ul>
                                            {item.packageFeature.map((feature, index) => {
                                                return (
                                                    <li
                                                        key={index}>
                                                        <strong style={{
                                                            color: `${feature.id === 1 ? 'blue'
                                                                :
                                                                feature.id === 2 ? 'red'
                                                                    :
                                                                    feature.id === 3 ? 'green'
                                                                        : ''
                                                                }`,
                                                            marginRight: '5px'
                                                        }}>
                                                            {renderIcon(feature.id)}
                                                        </strong>
                                                        {feature.feature}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className="buy-button-box">
                                            <a href="#" className="buy-now">TRY NOW</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="column">
                        <div className="pricing-card basic">
                            <div className="pricing-header">
                                <span className="plan-title">Padma</span>
                                <div className="price-circle">
                                    <span className="price-title">
                                        <strong>৳</strong><span> 500</span>
                                    </span>
                                    <span className="info">/ Month</span>
                                </div>
                            </div>
                            <div className="badge-box">
                                <span>6 Mbps</span>
                            </div>
                            <ul>
                                <li>
                                    <strong><FontAwesomeIcon icon={faFacebook} /></strong>  Unlimited Youtube
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faYoutube} /></strong> Unlimited Facebook
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faDownload} /></strong> Unlimited BDIX
                                </li>
                            </ul>
                            <div className="buy-button-box">
                                <a href="#" className="buy-now">TRY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="pricing-card eco">
                            <div className="pricing-header">
                                <span className="plan-title">Meghna</span>
                                <div className="price-circle">
                                    <span className="price-title">
                                        <strong>৳</strong><span> 620</span>
                                    </span>
                                    <span className="info">/ Month</span>
                                </div>
                            </div>
                            <div className="badge-box">
                                <span>9 Mbps</span>
                            </div>
                            <ul>
                                <li>
                                    <strong><FontAwesomeIcon icon={faFacebook} /></strong>  Unlimited Youtube
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faYoutube} /></strong> Unlimited Facebook
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faDownload} /></strong> Unlimited BDIX
                                </li>
                            </ul>
                            <div className="buy-button-box">
                                <a href="#" className="buy-now">TRY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="pricing-card pro">
                            <div className="popular">POPULAR</div>
                            <div className="pricing-header">
                                <span className="plan-title">Jamuna</span>
                                <div className="price-circle">
                                    <span className="price-title">
                                        <strong>৳</strong><span> 700</span>
                                    </span>
                                    <span className="info">/ Month</span>
                                </div>
                            </div>
                            <div className="badge-box">
                                <span>10 Mbps</span>
                            </div>
                            <ul>
                                <li>
                                    <strong><FontAwesomeIcon icon={faFacebook} /></strong>  Unlimited Youtube
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faYoutube} /></strong> Unlimited Facebook
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faDownload} /></strong> Unlimited BDIX
                                </li>
                            </ul>
                            <div className="buy-button-box">
                                <a href="#" className="buy-now">TRY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="pricing-card business">
                            <div className="pricing-header">
                                <span className="plan-title">Surma</span>
                                <div className="price-circle">
                                    <span className="price-title">
                                        <strong>৳</strong><span> 800</span>
                                    </span>
                                    <span className="info">/ Month</span>
                                </div>
                            </div>
                            <div className="badge-box">
                                <span>12 Mbps</span>
                            </div>
                            <ul>
                                <li>
                                    <strong><FontAwesomeIcon icon={faFacebook} /></strong>  Unlimited Youtube
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faYoutube} /></strong> Unlimited Facebook
                                </li>
                                <li>
                                    <strong><FontAwesomeIcon icon={faDownload} /></strong> Unlimited BDIX
                                </li>
                            </ul>
                            <div className="buy-button-box">
                                <a href="#" className="buy-now">TRY NOW</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

        </section>
    )
}

export default HomeInternet