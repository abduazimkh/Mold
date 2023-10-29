import { Container } from "../../routes/utils/Utils";
import classes from "./Nav.module.scss";
import uzb from "../../assets/images/uzb.svg"
import rus from "../../assets/images/rus.png"
import tel from "../../assets/images/tel.svg"
import email from "../../assets/images/email.svg"
import logo from "../../assets/images/logo.svg"
import { HiOutlineSearch } from 'react-icons/hi';
import { NavLink } from "react-router-dom";


const Nav = () => {
  return <div className={classes.nav__wrapper}>
    <div className={classes.top__nav}>
      <Container>
        <ul className={classes.top__nav__list}>
          <img src={uzb} alt="uzbekistan flag" />
          <img src={rus} alt="russian flag" />
          <a href="tel: +998 91 186 00 85">
            <img src={tel} alt="telepfone picture" />
            <span>+998 91 186 00 85</span>
          </a>
          <a href="mailto: erkinjon.hodjaev@gmail.com">
            <img src={email} alt="email picture" />
            <span>erkinjon.hodjaev@gmail.com</span>
          </a>
        </ul>
      </Container>
    </div>
    <div className={classes.bottom__nav}>
      <Container>
        <div className={classes.item}>
          <img src={logo} alt="logo picture" />
          <form className={classes.bottom__nav__form}>
            <input type="text" placeholder="Поиск..."/>
            <button>
              <HiOutlineSearch/>
            </button>
          </form>
        </div>
      </Container>
    </div>

    <div className={classes.nav__menu}>
      <Container>
        <div className={classes.nav__menu__items}>
          <NavLink  className={({isActive}) => isActive ? 'link link--active':'link'} to='/'>Главная</NavLink>
          <NavLink  className={({isActive}) => isActive ? 'link link--active':'link'} to='/partners'>Партнеры</NavLink>
          <NavLink  className={({isActive}) => isActive ? 'link link--active':'link'} to='/about'>О нас</NavLink>
          <NavLink  className={({isActive}) => isActive ? 'link link--active':'link'} to='/contact'>Контакт</NavLink>
        </div>
      </Container>
    </div>

  </div>;
};

export default Nav;
