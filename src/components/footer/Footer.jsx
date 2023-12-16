import React from "react";
import c from "./Footer.module.css";
import { FaTelegramPlane, FaFacebook, FaYoutube } from 'react-icons/fa';
import {  footerLinks, FooterTop_info } from "../../static/home__static";
import { Link } from "react-router-dom";
import logo from '../../../src/assets/logoBlue.svg';
import { t } from "i18next";
import { useSelector } from "react-redux";
function Footer() {
  const { language } = useSelector(state => state.lang)
  return (
    <div className={c.footer}>
      <div className={c.footerWrapper}>
        <div className={c.footerTop}>
          {FooterTop_info()?.map((item, inx) => (
            <div className={c.footerTopInfo} key={inx}>
              {item.icon}
              <div className={c.footerTopTitle}>
              <b className={c.footerHeading}>{item.title}</b>
                <p className={c.footerTitle}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={c.footerMain}>
          <div className={c.footerMainInfo}>
            <div className={c.footerMainLogo}>
              <img  src={logo} alt="" />
            </div>
            <div className={c.footerTitle}>
              {t("footer_logo_title")}
            </div>
            <div className={c.footerMainFollow}>
              <b className={c.footerHeading}>{t("follow")}</b>
              <div className={c.follow__wrapper}>
              <Link to="/">
                <FaTelegramPlane />
              </Link>
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaYoutube/>
              </Link>
              </div>
            </div>
          </div>
          <div className={c.footerMainInfo}>
            <div className={c.footerMainHeader}>
              <b className={c.footerHeading}>{t("footer_navbar_links")}</b>
              <div className={c.line}></div>
            </div>
            <ul className={c.footerLink}>
              {footerLinks?.map((item, inx) => (
                <Link className={c.footerTitleLink} to={item.link} key={inx}>
                  {language === "uz" ? item.title_uz : item.title_ru}
                </Link>
              ))}
            </ul>
          </div>
          <div className={c.footerMainInfo}>
            <div className={c.footerMainHeader}>
              <b className={c.footerHeading}>{t("footer_info")}</b>
              <div className={c.line}></div>
            </div>
            <p className={c.footerTitle}>
              {t("footer_info_title")}
              {t("footer.motto")}
            </p>
          </div>
        </div>
        <div className={c.copyrightText}>
        </div>
      </div>
    </div>
  );
}

export default Footer;