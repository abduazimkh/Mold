import React from 'react';
import { useTranslation } from 'react-i18next';
import c from '../../routes/home/Home.module.css'
import {rassrochka} from '../../static/home__static';

const Adv = () => {
    const { t } = useTranslation();
    const defaultLang = localStorage.getItem("lang") || "uz";
  return (
    <div className={c.rassrochka_container}>
    <h1>{t("advHeader")}</h1>
    <ul>
        {
            rassrochka?.map((i, nx) => 
                <li key={nx}>
                    <img src={i.img} alt=""/>
                    {/* <h4>{i.title}</h4> */}
                    {defaultLang === "uz" ? <h4>{i.title_uz}</h4> : <h4>{i.title_ru}</h4> }
                    {defaultLang === "uz" ? <span>{i.info_uz}</span> : <span>{i.info_ru}</span> }
                    {/* <span>{i.info}</span> */}
                </li>
            )
        }
    </ul>
</div>
  )
}

export default Adv
