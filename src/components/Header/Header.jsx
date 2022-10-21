import React, { useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderSliderImg,
} from "./HeaderElements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import japan from "./japan.png";
import global from "./global.png";
import first from "./first.png";
import tink from "./tinkof.png";
import agro from "./agro.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
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
            <HeaderSliderImg src={tink} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSliderImg src={first} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSliderImg src={japan} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSliderImg src={global} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSliderImg src={agro} />
          </SwiperSlide>
        </Swiper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
