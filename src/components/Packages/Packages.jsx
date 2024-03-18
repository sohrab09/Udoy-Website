import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Packages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Get } from '../../https/https';

const Packages = () => {

    const [packages, setPackages] = useState([]);

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
        <section className="mainContainer">
            <div className="margin-body">

                <div>
                    <div className="particles1"></div>
                    <div className="particles2"></div>
                    <div className="particles3"></div>
                    <div className="particles4"></div>
                </div>

                <div className="price-header-container">
                    <h1 className="title-h1 text-center title-around-flex"><span>Try Our Most Popular Packages</span></h1>
                </div>

                <div className='pricing-table'>
                    {
                        packages.map((item, index) => {
                            if (item.status === 2) {
                                return (
                                    <div className="pricing-column-wrapper" key={index} data-aos="zoom-in-up">
                                        <div className="pricing-column">
                                            <div className="pricing-price-row">
                                                <div className="pricing-price-wrapper">
                                                    <div className="pricing-price">
                                                        <div className="pricing-cost">৳ {item.price}</div>
                                                        <div className="time">/ Month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing-row-title">
                                                <div className="pricing_row_title">{item.packageName}</div>
                                                <div className="pricing_row_title">{item.bandwidth} MBPS</div>
                                            </div>
                                            <div className='specification-body'>
                                                <figure><FontAwesomeIcon icon={faYoutube} style={{ marginRight: '5px', color: 'red' }} /><span>Unlimited Youtube</span></figure>
                                                <figure><FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px', color: 'blue' }} /><span>Unlimited Facebook</span></figure>
                                                <figure><FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px', color: 'green' }} /><span>Unlimited BDIX</span></figure>
                                            </div>
                                            <div className="pricing-footer">
                                                <div className="gem-button-container gem-button-position-center">
                                                    <a href="#" className="gem-button gem-orange">Try now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Packages