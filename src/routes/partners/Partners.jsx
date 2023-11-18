import classes from "./Partners.module.scss";
import pattersImg from "../../assets/images/patterns.png"
import { Container } from "../../utils/Utils";
 
const Partners = () => {
  return (
    <Container>
      <div className={classes.patterns__wrapper}>
        <h2>Партнеры</h2>

        <div className={classes.patterns__item}>
          <img src={pattersImg} alt="" />
          <h3>Идет строительство</h3>
          
        </div>
      </div>
    </Container>
  )
}

export default Partners