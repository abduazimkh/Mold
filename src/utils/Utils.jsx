import classes from './Utils.module.scss';

const Container = ({children}) => {
  return (
    <div className={classes.container}>
        {children}
    </div>
  )
}


const Card = ({ image, title, text, price }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt="" />
      <h2 className={classes.card__title}>{title}</h2>
      <p className={classes.card__text}>{text}</p>
      <strong className={classes.card__price}>UZS {price}</strong>
      <button className={classes.btn}>Sotib olish</button>
    </div>
  );
};

export  { Container, Card };