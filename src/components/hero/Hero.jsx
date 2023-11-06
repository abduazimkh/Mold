import classes from "./Hero.module.scss";
import shop from "../../assets/images/karzinka.svg"
import nothing from "../../assets/images/nothing.png"
import { AiOutlineClose } from "react-icons/ai";
import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import heroSwiper1 from "../../assets/images/hero1.svg"
// import heroSwiper2 from "../../assets/images/hero2.svg"


const Hero = () => {
  const closeKarzinkaBtn = useRef();
  const popup = useRef();

  const handleOpen = (e) => {
    closeKarzinkaBtn.current.style = `
      transform: translateX(0px);
    `;
    popup.current.style = `display:block`;
  }

  const handleCloseBtn = (e) => {
    closeKarzinkaBtn.current.style = `
      transform: translateX(500px);
    `;
    popup.current.style = `display:none`;

  }

  return (
    <div className={classes.popup__wrapper}>
        <div ref={popup} className={classes.popup}></div>
        <div onClick={handleOpen} className={classes.shop__btn}>
          <img src={shop} alt="shop icon" />
          <h2>0 sum</h2>
        </div>
        <div ref={closeKarzinkaBtn} className={classes.karzina}>
          <button onClick={handleCloseBtn} className={classes.karzinka__close__btn}>
            <AiOutlineClose/>
          </button>
          <h2>Корзина</h2>
          <ul>
            <h2>Корзина пуста</h2>
            <img src={nothing} alt="" />
          </ul>
        </div>

      {/* <div className={classes.swiper}> */}

      {/* <Swiper
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
        <SwiperSlide><img src={heroSwiper1} alt="hero mold picture" /></SwiperSlide>
        <SwiperSlide><img src={heroSwiper2} alt="hero mold picture" /></SwiperSlide>
      </Swiper> */}

      {/* </div> */}

    </div>
  )
}

export default Hero