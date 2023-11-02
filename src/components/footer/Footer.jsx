import classes from "./Footer.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { Container } from "../../routes/utils/Utils";
import footerPic from "../../assets/images/footer.svg"
import { BiLogoTelegram } from "react-icons/bi";
import { BsFacebook, BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <div className={classes.footer__wrapper}>
      <Container>
        <ul className={classes.top__footer__list}>
          <ul>
            <li>
              <HiOutlineLocationMarker />
            </li>
            <li>
              <h3>Наш адресс</h3>
              <p>
                Наманганская область, Давлатабадский район, улица Дустлик Шох
                109
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <FiPhoneCall />
            </li>
            <li>
              <h3>Свяжитесь с нами</h3>
              <p>+998 91 186 00 85</p>
            </li>
          </ul>
          <ul>
            <li>
              <CgMail />
            </li>
            <li>
              <h3>Электрон адрес</h3>
              <p>erkinjon.hodjaev@gmail.com</p>
            </li>
          </ul>
        </ul>

        <ul className={classes.footer__bottom__list}>
          <ul>
            <img src={footerPic} alt="" />
            <li>
              Все инструменты для изготовления пресс-форм, компоненты и
              аксессуары для пресс-форм, химикаты для пресс-форм, инструменты
              для шлифование и полирование, абразивные камни, станки для
              металлообработки с ЧПУ, термопластавтоматы и т.д.
            </li>
            <h2>Подписывайтесь на нас</h2>
            <ul className={classes.contact__list}>
              <li>
                <BiLogoTelegram />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsYoutube />
              </li>
            </ul>
          </ul>

          <ul>
            <h2>Полезные ссылки</h2>
            <ul className={classes.menuu}>
              <li>Главная</li>
              <li>Партнеры</li>
            </ul>
            <ul className={classes.menuu}>
              <li>О нас</li>
              <li>Контакт</li>
            </ul>
          </ul>

          <ul>
            <h2>Для предложений</h2>
              <li>
                Для удобства работы постоянных клиентов и привлечения новых
                заказчиков был создан этот сайт, на котором можно найти нужные
                детали, компоненты, инструменты, каталоги и информацию о
                продуктах. Если Вам не удалось найти что-либо - без
                замешательства обращайтесь по телефону или почте, мы немедленно
                поможем.
              </li>
          </ul>

        </ul>
      </Container>
    </div>
  );
};

export default Footer;
