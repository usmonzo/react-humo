import React from "react";
import { HeaderSliderImg } from "./HeaderElements";
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
import cl from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={cl.HeaderContainer}>
        <div className={cl.HeaderContent}>
          <Swiper
            style={{ borderRadius: "20px" }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              // pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
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
        </div>
      </div>
    </>
  );
};

export default Header;
