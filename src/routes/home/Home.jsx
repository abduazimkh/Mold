import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.home__wrapper}>
      {/* <div className={classes.home__first__item}>
        <div className={classes.home__modal__menu}>
wdqwd
        </div>

        <div className={classes.home__modal__swiper}>
dw
        </div>
        
      </div> */}

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
  )
}

export default Home