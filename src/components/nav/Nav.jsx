import { Container } from "../../routes/utils/Utils";
import classes from "./Nav.module.scss";
import uzb from "../../assets/images/uzb.svg"
import rus from "../../assets/images/rus.png"
import tel from "../../assets/images/tel.svg"
import email from "../../assets/images/email.svg"

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
    
  </div>;
};

export default Nav;
