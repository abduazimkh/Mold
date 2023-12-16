import React, { useState } from "react";
import category from "../../assets/home/categories.svg";
import c from "./NavbarSidebar.module.css";
import { FiChevronRight, FiX, FiArrowLeft } from "react-icons/fi";
import useFetchWithoutParams from "../../hooks/fetch-hooks/useFetchWithoutParams";
import { Link } from "react-router-dom";
import MiniLoader from "../loader/MiniLoader"
import logo from '../../../src/assets/logoBlue.svg';
import { useSelector } from "react-redux";


const NavbarSidebar = ({customStyle}) => {
  const { data, isLoading } = useFetchWithoutParams("/category/category-nest");
  const [navShow, setNavShow] = useState(false);
  const [sidebarShow, serSidebarShow] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const {language} = useSelector(state => state.lang);

  return (
    <div style={customStyle && {background: "transparent"}} className={c.navbar__sidebar}>
      <div style={customStyle} onClick={()=> {
        serSidebarShow(true)
        }} className={c.sidebar__categorytitle} >
        <img src={category} alt="" />
        <p>Категория</p>
      </div>
      {
        language === "uz" ? 
        <ul className={c.sidebar__categorycollection}>
        {!isLoading && data?.mainCategory_uz ?
          data?.mainCategory_uz?.map((sidebar__item, index) => (
            <li className={c.sidebar__categoryitem} key={index}>
              <Link to={`/maincategory/${sidebar__item}`}>{sidebar__item}</Link>{" "}
              <FiChevronRight />
              { data.productSubCategories_uz[index]?.length > 1 ? <ul className={c.subitems__container}>
                {  data?.productSubCategories_uz[index].map((sub_item, ind) => (
                  <li key={ind}>
                    <Link to={`/subcategory/${sub_item}`}>{ sub_item}</Link>
                  </li> 
                )) }
              </ul> : <></>}
            </li>
          ))
          : data?.mainCategory_uz?.length > 0 ? <MiniLoader/> : <></>
          }
      </ul>
      : 
      <ul className={c.sidebar__categorycollection}>
      {!isLoading && data?.mainCategory_ru ?
        data?.mainCategory_ru?.map((sidebar__item, index) => (
          <li className={c.sidebar__categoryitem} key={index}>
            <Link to={`/maincategory/${sidebar__item}`}>{sidebar__item}</Link>{" "}
            <FiChevronRight />
            {data?.productSubCategories_ru[index]?.length > 1 ? <ul className={c.subitems__container}>
              { data?.productSubCategories_ru[index].map((sub_item, ind) => (
                <li key={ind}>
                  {sub_item ? <Link to={`/subcategory/${sub_item}`}>{ sub_item}</Link> : <p>Не существует</p>}
                </li> 
              ))}
            </ul> : <></>}
          </li>
        ))
        : data?.mainCategory_ru?.length > 0 ? <MiniLoader/> : <></>
        }
    </ul>
      }
      {
        sidebarShow &&  <div onClick={()=>{
          serSidebarShow(false)
          setNavShow(false);
        }} className={c.sidebar_mobileShadow} ></div>
      }
     
      <div className={sidebarShow? c.sidebar_mobile : [c.sidebar_mobile, c.sidebar_hidden].join(" ")} >
        <div className={c.sidebar_mobileHeader}>
          <img className={c.logo__navbarsidebar} src={logo} alt="" />
          <FiX onClick={()=>{
            serSidebarShow(false)
            setNavShow(false);
            }} />
        </div>
        <div
          className={
            navShow
              ? [c.sidebar_mobileContainer, c.sidebar_toLeft].join(" ")
              : c.sidebar_mobileContainer
          }
        >
          <div className={c.sidebar_mobileItem}>
            <p className={c.sidebar_mobileTitle}>Категория</p>
            {language === "uz" ? data?.mainCategory_uz?.map((sidebar__item, index) => (
              <li
                onClick={() => {
                  setNavShow(true);
                  setItemIndex(index);
                }}
                className={c.sidebar__categoryitem}
                key={index}
              >
                <span>{sidebar__item}</span> <FiChevronRight />
              </li>
            )) : 
            data?.mainCategory_ru?.map((sidebar__item, index) => (
              <li
                onClick={() => {
                  setNavShow(true);
                  setItemIndex(index);
                }}
                className={c.sidebar__categoryitem}
                key={index}
              >
                <span>{sidebar__item}</span> <FiChevronRight />
              </li>
            ))
            }
          </div>
          <div className={c.sidebar_mobileItem}>
            <p
              onClick={() => setNavShow(false)}
              className={c.sidebar_mobileArrow}
            >
              <FiArrowLeft /> Main Menu
            </p>
            {!isLoading && data?.mainCategory_uz && (
              <ul>
                <li className={c.sidebar__categoryitem}>
                  <Link
                    to={`/maincategory/${data?.mainCategory_uz[itemIndex]}`}
                  >
                    <b>{data?.mainCategory_uz[itemIndex]}</b>
                  </Link>{" "}
                </li>

                {data?.productSubCategories_uz[itemIndex]?.map(
                  (sub_item, ind) => (
                    <li className={c.sidebar__categoryitem} key={ind}>
                      <Link to={`/subcategory/${sub_item}`}>{sub_item}</Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSidebar;
