import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import c from './Partners.module.css';
import { Link } from 'react-router-dom';
import repair from '../../assets/repair.png';
   
const Partners = () => {
  const {t} = useTranslation()
  return (
    <div className={c.partners}>
      <SubNavbar/>
      <Navbar/>
      <div className={c.partners__container}>
        <h1>{t("additional__links.partners")}</h1>
        <div className={c.image__wrapper}>
          <img src={repair} alt="" />
          <p>{t("partners.cons")}</p>
       <Link to="/">{t("404.redirect")}</Link>
        </div>
      </div>
    </div>
  )
}

export default Partners