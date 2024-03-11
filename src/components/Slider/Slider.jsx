import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slider.css'

import img1 from "../../assets/s1.jpg"
import img2 from "../../assets/s2.jpg"
import img3 from "../../assets/s3.jpg"
import img4 from "../../assets/s4.jpg"
import img5 from "../../assets/s5.jpg"
import img6 from "../../assets/s6.jpg"
import img7 from "../../assets/s7.jpg"
import img8 from "../../assets/s8.jpg"
import img9 from "../../assets/s9.jpg"
import img10 from "../../assets/s10.jpg"

const slide = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img6
    },
    {
        img: img7
    },
    {
        img: img8
    },
    {
        img: img9
    },
    {
        img: img10
    }
]


const Slider = () => {
    return (
        <div>
            <Swiper
                className="mySwiper"
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
            >
                {
                    slide.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={item.img} alt={item.img} className="swiper-slide" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider