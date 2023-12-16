import React from 'react';
import Product from '../product/Product';
import c from './ProductWrapper.module.css';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line  
import NavbarSidebar from '../navbar-sidebar/NavbarSidebar';
import ProductSkeleton from '../product-skeleton/ProductSkeleton';

const ProductWrapper = (props) => {
  const {language} = useSelector(state => state.lang);

  return (
    <div className={c.wrapper} >
      <h1 className={c.wrapper__title}>{language === "uz" ? props.title.categoryName_uz : props.title.categoryName_ru}</h1>
      <Swiper
         breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1.1,
          },
          460: {
            width: 460,
            slidesPerView: 1.7,
          },
          560: {
            width: 560,
            slidesPerView: 1.9,
          },
          760: {
            width: 760,
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        slidesPerGroup={1}
        autoplay={{delay: 5000}}
        loop={true}
        navigation={true}
        draggable={true}
        modules={[Pagination, Navigation]} 
        className={c.carousel__wrapper}
        >
        {props?.data ? props.data.map(product => 
         <SwiperSlide key={product._id} className={c.slide}>
            <Product  productData={product}/>
          </SwiperSlide>
        ) : 
        
        new Array(5).fill().map((_, index) => 
          <SwiperSlide key={index} className={c.slide}>
             <ProductSkeleton/>
           </SwiperSlide>
         )
        }
      </Swiper>
    </div>
  )
}

export default ProductWrapper
