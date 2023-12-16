import React from "react";
import phone from '../../assets/home/phone.svg'
import email from '../../assets/home/email.svg'
import flagUz from '../../assets/home/flag.svg';
import flagRu from '../../assets/home/russia.png';
import c from "./SubNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../language/i18next";


const SubNavbar = () => {

  const { language } = useSelector(state => state.lang);
  const dispatch = useDispatch();
  const handleChange = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    dispatch({ type: "LANG_CHANGED", payload: selectedLang});
  };

  
  return (
    <div className={c.home__topside}>
        <div style={language === "uz" ? {borderBottom: "4px solid var(--main-background-color)"} : null} className={c.topside__lang} onClick={() => handleChange("uz")}>
          <img src={flagUz} alt="" />
        </div>  
        <div style={language === "ru" ? {borderBottom: "4px solid var(--main-background-color)"} : null} className={c.topside__lang} onClick={() => handleChange("ru")}>
          <img src={flagRu} alt="" />
        </div>
        <div className={c.topside__contact}>
        <div className={c.topside__phone}>
          <a href="tel: +998911860085"><img src={phone} alt="" /> <span>+998 91 186 00 85</span></a>
        </div>
        <div className={c.topside__email}>
          <a href="mailto: erkinjon.hodjaev@gmail.com"><img src={email} alt="" /> <span>erkinjon.hodjaev@gmail.com</span></a>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
