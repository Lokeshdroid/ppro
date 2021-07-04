import React, { useRef, useEffect, useState } from 'react'
import LatestCard from './LatestCard'
import "../../styles/components/right-sidebar.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import SwiperCore, { Autoplay } from "swiper"

SwiperCore.use([Autoplay]);

export default function LatestLaunches() {
    const container = useRef()
    const [nextBtn, setNextBtn] = useState('');
    const [prevBtn, setPrevBtn] = useState('');

    useEffect(() => {
        console.log(container)
        setPrevBtn(container.current.querySelector('.nav--prev'))
        setNextBtn(container.current.querySelector('.nav--next'))
    }, [container])
    return (
        <>
            <div className="latest-launches-slider" ref={container}>
                <button className="nav--prev">
                    <FontAwesomeIcon icon={faChevronUp} size="sm" />
                </button>
                <button className="nav--next">
                    <FontAwesomeIcon icon={faChevronDown} size="sm" />
                </button>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={'auto'}
                    spaceBetween={15}
                    navigation={{ nextEl: nextBtn, prevEl: prevBtn }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 2600 }}
                    speed={1000}
                >
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LatestCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
