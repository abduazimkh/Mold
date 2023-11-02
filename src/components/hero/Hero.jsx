import classes from "./Hero.module.scss";
import shop from "../../assets/images/karzinka.svg"

const Hero = () => {
  return (
    <div>
        <div className={classes.shop__btn}>
            <img src={shop} alt="shop icon" />
        </div>
    </div>
  )
}

export default Hero