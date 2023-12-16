import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useRouteMatch } from 'react-router-dom';
import c from './Sidebar.module.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { auth__out } from '../../redux/actions/auth';
import Modal from '../modal/Modal';
import { toast } from 'react-toastify';
import { Sidebar__dummy } from '../../static/sidebar__dummy';
import { t } from 'i18next';
import logo from "../../assets/logoBlue.svg";
import { Link } from 'react-router-dom';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import flagUz from '../../assets/home/flag.svg';
import flagRu from '../../assets/home/russia.png';
import i18n from "../language/i18next";


const Sidebar = (props) => {
  const { language } = useSelector(state => state.lang);
  const { url } = useRouteMatch();
  const [modal, setModal] = useState(false);
  const {admin} = useSelector(state => state.auth);


  const handleLogout = () => {
    props.auth__out();
    toast.success(language === "uz" ? "Муваффақиятли тизимдан чиқдингиз!" : "Вы успешно вышли из системы!")
  }

  const dispatch = useDispatch();
  const handleChange = (selectedLang) => {
    localStorage.setItem("lang", selectedLang);
    i18n.changeLanguage(selectedLang);
    dispatch({ type: "LANG_CHANGED", payload: selectedLang});
  };

  return (
    <>
      <div className={c.sidebar}>
        <Link to="/">
        <img src={logo} alt="" />
        </Link>
        <div className={c.sidebar__lang}>
        <div style={language === "uz" ? {borderBottom: "4px solid var(--main-background-color)"} : null} className={c.topside__lang} onClick={() => handleChange("uz")}>
          <img src={flagUz} alt="" />
        </div>  
        <div style={language === "ru" ? {borderBottom: "4px solid var(--main-background-color)"} : null} className={c.topside__lang} onClick={() => handleChange("ru")}>
          <img src={flagRu} alt="" />
        </div>
        </div>
        <div className={c.sidebar__account}>
          <div className={c.account__avatar}>
            <MdOutlineAdminPanelSettings/>
          </div>
          <div>
            <h3>{admin.substring(0, 8)}</h3>
            <p>{t("sidebar.admin")}</p>
          </div>
        </div>
       
        <ul className={c.sidebar__collection}>
          {Sidebar__dummy().map((sidebar__item) => (
            <li key={sidebar__item.id} className={c.collection__item}>
              <NavLink
                activeClassName={c.sidebar__activeitem}
                className={c.sidebar__item}
                to={url + sidebar__item.route}
              >
                {sidebar__item.icon}
                <p>{sidebar__item.title}</p>
              </NavLink>
            </li>
          ))}
          <button className={c.logout__btn} onClick={() => setModal(true)}> <FiLogOut/> {t("logOut")}</button>
        </ul>
      </div>
      {modal && <Modal title="Tizimdan chiqish" description="Haqiqatdan ham, tizimdan chiqishga rozimisz?" yes={handleLogout} no={setModal} modal={modal}/>}
      <div className={c.sidebar_bottom}>
        <ul className={c.sidebar__collection_bottom}>
          {Sidebar__dummy().map((sidebar__item_bottom) => (
            <li
              key={sidebar__item_bottom.id}
              className={c.collection__item_bottom}
            >
              <NavLink
                activeClassName={c.sidebar__activeitem_bottom}
                className={c.sidebar__item_bottom}
                to={url + sidebar__item_bottom.route}
              >
                {sidebar__item_bottom.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
 
 
}

export default connect (null, { auth__out })(Sidebar)
