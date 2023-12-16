import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import c from './Page404.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Page404 = () => {
  const { t } = useTranslation();
  document.title = "404 NOT FOUND"
  return (
    <>
    <Navbar />
      <div className={c.page404}>
        <h1>404</h1>
       <p>{t("404.title")}</p>
       <Link to="/">{t("404.redirect")}</Link>
      </div>
    </>
  )
}

export default Page404
