import { useSwiper } from 'swiper/react'
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"


const SwiperSlideButtons = () => {
    const swiper = useSwiper()
  return (
    <div className="swiper-nav-btns">
        <button onClick={()=> swiper.slidePrev()}><FiChevronLeft/></button>
        <button onClick={()=> swiper.slideNext()}><FiChevronRight/></button>
    </div>
  )
}

export default SwiperSlideButtons