import { useState } from "react";
import classes from "./Home.module.scss";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperSlideButtons from "./SlideButton";
import { Card, Container } from "../../utils/Utils";

const Home = () => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch("https://mold-components.onrender.com/category/category-reel")
      .then((res) => res.json())
      .then((data) => {
        setDate(data);
        // console.log(data)


      }
      );
  }, []);

console.log(date);

  return (
    <div className={classes.home__wrapper}>

      <Container>
      <div className={classes.cards__wrapper}>
      <Swiper
            slidesPerView={2.5}
            centeredSlides={false}
            loop={true}
            className={classes.mySwiper}
            breakpoints={{
              600: {
                width: 600,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2.5,
              },
            }}
          >
        {
          date[0].allRefinedProducts.map(product => (
            <SwiperSlide className={classes.SwiperSlide} key={product._id}>
            <Card 
              image={product.productImages[0]}
              title={product.productSubCategory_ru}
              text={product.productName_ru}
              price={product.productSizesAndQuantity[0].price}
            />
            </SwiperSlide>
          ))
        }
        <SwiperSlideButtons/>
      </Swiper>
      </div>
      </Container>

      <div className={classes.clients}>
        <h2>Мы предлагаем клиентам следующее</h2>

        <ul className={classes.clients__cards}>
          <li>
            <h3>Покупка в рассрочку</h3>
            <p>Удобная схема онлайн-заказа продукции в MOLD-COMPONENTS.COM</p>
          </li>
          <li>
            <h3>Бесплатная доставка</h3>
            <p>Качественные продукты и услуги</p>
          </li>
          <li>
            <h3>Бонусная система</h3>
            <p>Бонусная система</p>
          </li>
          <li>
            <h3>Помощь</h3>
            <p>Частые вопросы</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
