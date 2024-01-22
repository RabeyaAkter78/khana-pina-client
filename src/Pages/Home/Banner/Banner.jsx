import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import img1 from "../../../assets/images/15951257_Food-Web-Banner-11.jpg";
import img2 from "../../../assets/images/12958910_Food-Web-Banner-20.jpg";
import img3 from "../../../assets/images/32898203_food_web_banner_21.jpg";
import img4 from "../../../assets/images/01.jpg";
import img5 from "../../../assets/images/04.jpg";
import img6 from "../../../assets/images/06.png";


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Banner;