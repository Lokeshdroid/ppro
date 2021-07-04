import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css"
// import "../../styles/components/sports.scss";
import image1 from "../../assets/images/banners/2.jpeg";

SwiperCore.use([Pagination, Autoplay]);

export default function MainCarousel() {
  return (
    <div className="sports-carousel">
      <Swiper
        slidesPerView={1}
        speed={1000}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src={image1} alt="logo" className="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="logo" className="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="logo" className="banner-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
