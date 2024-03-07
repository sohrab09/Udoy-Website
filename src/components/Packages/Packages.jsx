import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Packages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const packages = [
    {
        id: 1,
        packageName: 'Padma',
        packagePrice: 525,
        packageUnit: 'Per Month',
        packageSpeed: '6 MBPS',
        packageFeature: [
            { id: 1, feature: 'Unlimited Facebook' },
            { id: 2, feature: 'Unlimited Youtube' },
            { id: 3, feature: 'Unlimited BDIX' },
        ],
    },
    {
        id: 2,
        packageName: 'Rupsha',
        packagePrice: 625,
        packageUnit: 'Per Month',
        packageSpeed: '10 MBPS',
        packageFeature: [
            { id: 1, feature: 'Unlimited Facebook' },
            { id: 2, feature: 'Unlimited Youtube' },
            { id: 3, feature: 'Unlimited BDIX' },
        ],
    },
    {
        id: 3,
        packageName: 'Meghna',
        packagePrice: 725,
        packageUnit: 'Per Month',
        packageSpeed: '15 MBPS',
        packageFeature: [
            { id: 1, feature: 'Unlimited Facebook' },
            { id: 2, feature: 'Unlimited Youtube' },
            { id: 3, feature: 'Unlimited BDIX' },
        ],
    },
    {
        id: 4,
        packageName: 'Jamuna',
        packagePrice: 825,
        packageUnit: 'Per Month',
        packageSpeed: '20 MBPS',
        packageFeature: [
            { id: 1, feature: 'Unlimited Facebook' },
            { id: 2, feature: 'Unlimited Youtube' },
            { id: 3, feature: 'Unlimited BDIX' },
        ],
    },
    // {
    //     id: 5,
    //     packageName: 'Brahmaputra',
    //     packagePrice: 925,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '25 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // },
    // {
    //     id: 6,
    //     packageName: 'Teesta',
    //     packagePrice: 1025,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '30 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // },
    // {
    //     id: 7,
    //     packageName: 'Sangu',
    //     packagePrice: 1125,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '35 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // },
    // {
    //     id: 8,
    //     packageName: 'Titas',
    //     packagePrice: 1225,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '40 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // },
    // {
    //     id: 9,
    //     packageName: 'Hooghly',
    //     packagePrice: 1325,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '45 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // },
    // {
    //     id: 10,
    //     packageName: 'Ganges',
    //     packagePrice: 1425,
    //     packageUnit: 'Per Month',
    //     packageSpeed: '50 MBPS',
    //     packageFeature: [
    //         { id: 1, feature: 'Unlimited Facebook' },
    //         { id: 2, feature: 'Unlimited Youtube' },
    //         { id: 3, feature: 'Unlimited BDIX' },
    //     ],
    // }
];

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


const Packages = () => {
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
                    <h1 className="title-h1 text-center title-around-flex"><span>pricing table</span></h1>
                </div>

                <div className='pricing-table'>

                    {
                        packages.map((item, index) => {
                            return (
                                <div className="pricing-column-wrapper" key={index} data-aos="zoom-in-up">
                                    <div className="pricing-column">
                                        <div className="pricing-price-row">
                                            <div className="pricing-price-wrapper">
                                                <div className="pricing-price">
                                                    <div className="pricing-cost">৳ {item.packagePrice}</div>
                                                    <div className="time">{item.packageUnit}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-row-title">
                                            <div className="pricing_row_title">{item.packageName}</div>
                                            <div className="pricing_row_title">{item.packageSpeed}</div>
                                        </div>
                                        <div className='specification-body'>
                                            {item.packageFeature.map((feature, index) => {
                                                return (
                                                    <figure
                                                        key={index}>
                                                        <span style={{
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
                                                        </span>
                                                        {feature.feature}
                                                    </figure>
                                                )
                                            })}
                                        </div>
                                        <div className="pricing-footer">
                                            <div className="gem-button-container gem-button-position-center">
                                                <a href="#" className="gem-button gem-orange">Try now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                    {/* <div className="pricing-column-wrapper">
                        <div className="pricing-column">
                            <div className="pricing-price-row">
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">
                                        <div className="pricing-cost">৳ 525</div>
                                        <div className="time">Per Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-row-title">
                                <div className="pricing_row_title">PADMA</div>
                                <div className="pricing_row_title">6 MBPS</div>
                            </div>
                            <div className='specification-body'>
                                <figure className="pricing-row">Unlimited Youtube</figure>
                                <figure className="pricing-row"><span>Unlimited Facebook</span></figure>
                                <figure className="pricing-row"><span>Unlimited BDIX</span></figure>
                            </div>
                            <div className="pricing-footer">
                                <div className="gem-button-container gem-button-position-center">
                                    <a href="#" className="gem-button gem-green">Try now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-column-wrapper">
                        <div className="pricing-column">
                            <div className="pricing-price-row">
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">
                                        <div className="pricing-cost">৳ 800</div>
                                        <div className="time">Per Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-row-title">
                                <div className="pricing_row_title">SURMA</div>
                                <div className="pricing_row_title">12 MBPS</div>
                            </div>
                            <div className='specification-body'>
                                <figure className="pricing-row">Unlimited Youtube</figure>
                                <figure className="pricing-row"><span>Unlimited Facebook</span></figure>
                                <figure className="pricing-row"><span>Unlimited BDIX</span></figure>
                            </div>
                            <div className="pricing-footer">
                                <div className="gem-button-container gem-button-position-center">
                                    <a className="gem-button gem-purple">Try now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-column-wrapper">
                        <div className="pricing-column">
                            <div className="pricing-price-row">
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">
                                        <div className="pricing-cost">৳ 1200</div>
                                        <div className="time">Per Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-row-title">
                                <div className="pricing_row_title">Karnaphuli</div>
                                <div className="pricing_row_title">25 MBPS</div>
                            </div>
                            <div className="specification-body">
                                <figure className="pricing-row">Unlimited Youtube</figure>
                                <figure className="pricing-row"><span>Unlimited Facebook</span></figure>
                                <figure className="pricing-row"><span>Unlimited BDIX</span></figure>
                            </div>
                            <div className="pricing-footer">
                                <div className="gem-button-container gem-button-position-center">
                                    <a className="gem-button gem-orange">Try now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-column-wrapper">
                        <div className="pricing-column">
                            <div className="pricing-price-row">
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">
                                        <div className="pricing-cost">৳ 1600</div>
                                        <div className="time">Per Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-row-title">
                                <div className="pricing_row_title">Madhumoti</div>
                                <div className="pricing_row_title">35 MBPS</div>
                            </div>
                            <div className="specification-body">
                                <figure className="pricing-row">Unlimited Youtube</figure>
                                <figure className="pricing-row"><span>Unlimited Facebook</span></figure>
                                <figure className="pricing-row"><span>Unlimited BDIX</span></figure>
                            </div>
                            <div className="pricing-footer">
                                <div className="gem-button-container gem-button-position-center">
                                    <a className="gem-button gem-yellow">Try now</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Packages