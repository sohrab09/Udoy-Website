import './HomeInternet.css';
import Lottie from "lottie-react";
import animation1 from '../../../assets/animation1.json';
import animation3 from '../../../assets/animation3.json';
import pattern from '../../../assets/pattern-7.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Get } from '../../../https/https';


const HomeInternet = () => {

    document.title = "Home | Udoy Internet"

    const [renderIndex, setRenderIndex] = useState(0);

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRenderIndex(prevIndex => (prevIndex + 1) % 12);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    const getPackageList = async () => {
        try {
            Get('/api/UdoySiteApi/GetPackageList')
                .then((res) => {
                    setPackages(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPackageList();
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
                                        {item.status === 2 && <div className="popular">POPULAR</div>}
                                        <div className="pricing-header">
                                            <span className="plan-title">{item.packageName}</span>
                                            <div className="price-circle">
                                                <span className="price-title">
                                                    <strong>৳</strong><span> {item.price}</span>
                                                </span>
                                                <span className="info">/ Month</span>
                                            </div>
                                        </div>
                                        <div className="badge-box">
                                            <span>{item.bandwidth} MBPS</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <strong style={{ marginRight: '5px', color: 'red' }}><FontAwesomeIcon icon={faYoutube} /></strong>  Unlimited Youtube
                                            </li>
                                            <li>
                                                <strong style={{ marginRight: '5px', color: 'blue' }}><FontAwesomeIcon icon={faFacebook} /></strong> Unlimited Facebook
                                            </li>
                                            <li>
                                                <strong style={{ marginRight: '5px', color: 'green' }}><FontAwesomeIcon icon={faDownload} /></strong> Unlimited BDIX
                                            </li>
                                        </ul>
                                        {/* <div className="buy-button-box">
                                            <a href="#" className="buy-now">TRY NOW</a>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </section>
    )
}

export default HomeInternet