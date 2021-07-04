import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import image1 from "../../assets/images/banners/1.jpeg";

SwiperCore.use([Navigation]);

const bannerImages = [
  { image: require("../../assets/images/banners/1.jpeg") },
  { image: require("../../assets/images/banners/2.jpeg") },
  { image: require("../../assets/images/banners/3.jpeg") },
  { image: require("../../assets/images/banners/4.jpeg") },
];

export default function HomeBanner() {
  return (
    <div className="home-banner-main">
      <Swiper
        navigation={true}
        slidesPerView={1}
        speed={1000}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerImages.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image1} alt="logo" className="home-banner-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
