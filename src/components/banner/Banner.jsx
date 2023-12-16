import React from "react";
import c from "./Banner.module.css";
import { products_type } from "../../static/home__static";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,  } from "swiper";
import SwiperCore, {
  EffectCoverflow,
  Autoplay
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Banner = () => {
  return (
    <div className={c.banner_conatiner}>
      <div className={c.circle1}></div>
      <div className={c.circle2}></div>
      <div
        className={c.slider_products}
        style={{ display: "flex", justifyContent: "flex-end"}}
      >
        <Swiper
          autoplay={{delay: 5000}}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={c.mySwiperb}
        >
          {products_type?.map((i, index) => (
            <SwiperSlide key={index} className={c.slider2}>
              <img src={i.img} alt="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
