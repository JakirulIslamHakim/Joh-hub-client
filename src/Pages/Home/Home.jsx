import  { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../utils/Container";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Container>
      <div className=" lg:h-[600px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/PNYnWdc/computer-2982270-640-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/PNYnWdc/computer-2982270-640-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src="https://i.ibb.co/3791ST2/download.jpg" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default Home;






/***
 * 
 * import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

 * 
*/

