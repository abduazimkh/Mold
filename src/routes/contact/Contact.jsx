import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import Navbar from '../../components/navbar/Navbar';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import c from './Contact.module.css';
import { FaTelegramPlane, FaFacebook, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={c.contact}>
        <SubNavbar/>
        <Navbar/>
        <div className={c.contact__container}>
          <h1>{t("contactpage.contact__title")}</h1>
          <ul className={c.contact__list}>
            <li className={c.list__item}> <FiPhoneCall/> <a href="tel:+998911860085">+998911860085</a> </li>
            <li className={c.list__item}> <FiMail/> <a href="mailto:erkinjon.hodjaev@gmail.com">erkinjon.hodjaev@gmail.com</a> </li>
            <li className={c.list__item}> <FiMapPin/> {t("FooterTop_info_subtitle")} </li>
            <li className={c.list__item}>
              <div className={c.footerMainFollow}>
              <b className={c.footerHeading}>{t("follow")}</b>
              <div className={c.follow__wrapper}>  
              <a href="https://t.me/mold_components">
                <FaTelegramPlane />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube/>
              </a>
              </div>
            </div>
            </li>
          </ul>
          <div className={c.contact__map}>
            <iframe title='map"' className={c.map__iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.355024311767!2d71.58551931541363!3d40.99560197930208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e122151052b5932!2zNDDCsDU5JzQ0LjIiTiA3McKwMzUnMTUuOCJF!5e0!3m2!1sen!2sus!4v1656415605338!5m2!1sen!2sus" style={{border: "none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    </div>
  )
}

export default Contact
