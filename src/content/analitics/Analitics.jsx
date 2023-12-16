import React from 'react';
import c from './Analitics.module.css';
import { useTranslation } from 'react-i18next';
import repair from '../../assets/repair.png';
import ContentTitle from '../../components/content-title/ContentTitle';

const Analitics = () => {
  const {t} = useTranslation();
  return (
    <div className={c.analitics}>
      <ContentTitle title={t("analytics.title")}/>
      <div className={c.partners__container}>
        <div className={c.image__wrapper}>
          <img src={repair} alt="" />
          <p>{t("partners.cons")}</p>
        </div>
      </div>
    </div>
  )
}

export default Analitics
