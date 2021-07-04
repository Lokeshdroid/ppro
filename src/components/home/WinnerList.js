import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import WinnerCard from "./WinnerCard";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

export default function WinnerList({ data }) {
  return (
    <div className="home-listing-wrap">
      <h2>{data.title}</h2>
      <div className="winner-main">
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          autoplay={{ delay: 0.1 }}
          centeredSlides={false}
          speed={2800}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}

          allowTouchMove={false}
        >
          {data.list.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <WinnerCard key={index} data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
