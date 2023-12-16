import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import c from './About.module.css';
import aboutImage from '../../assets/about/office-min 2.jpg';
   
const About = () => {
  const {t} = useTranslation();
  return (
    <div className={c.about}>
      <SubNavbar/>
      <Navbar/>
      <div className={c.about__container}>
        <h1 className={c.about__title}>{t("about__page.about__title")}</h1>
        <p>{t("about__page.about__greeting")}</p>
        <p>{t("about__page.about__p1")}</p>
        <p>{t("about__page.about__p2")}</p> 
        <img className={c.about__hero} src={aboutImage} alt="" />
        <p>{t("about__page.about__p3")}</p>
        <ul className={c.about__list}>
          {t("about__page.about__items").split("',").map((i, indx) => 
            <li key={indx}>{i.replace(/'/g, "")}</li>  
          )}
        </ul>
      </div>
    </div>
  )
}

export default About