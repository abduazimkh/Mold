import classes from "./Contact.module.scss";
import { Container } from "../../utils/Utils";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { BiLogoTelegram } from "react-icons/bi";
import { BsFacebook, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={classes.contact__wrapper}>
      <Container>
        <div className={classes.contact__wrapper__item}>
          <h1>Cвяжитесь с нами</h1>

          <ul>
            <li>
              <FiPhoneCall />
              <a href="tel: +998911860085">+998911860085</a>
            </li>
            <li>
              <CgMail />
              <a href="mailto: erkinjon.hodjaev@gmail.com">
                erkinjon.hodjaev@gmail.com
              </a>
            </li>
            <li>
              <HiOutlineLocationMarker />
              <a>
                Наманганская область, Давлатабадский район, улица Дустлик Шох
                109
              </a>
            </li>
          </ul>

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

          <div className={classes.contact__map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9905.322091361266!2d69.25016982510029!3d41.31825886281422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1698587417712!5m2!1suz!2s"
              width={600}
              height={450}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
