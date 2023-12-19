import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./styles.css";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useEffect, useRef, useState } from "react";

// Initialize required Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow]);

const HeroSwiper = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (
      swiperRef.current !== null &&
      swiperRef.current.swiper.autoplay.running
    ) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (
      swiperRef.current !== null &&
      !swiperRef.current.swiper.autoplay.running
    ) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="w-screen h-96 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        // onSwiper={setSwiperInstance}
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 3000,
          //   disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        effect="coverflow"
        pagination={{
          clickable: true,
        }}
        className="h-screen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        {/* Add more SwiperSlides with images */}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
