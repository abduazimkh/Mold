import classes from './Utils.module.scss';

const Container = ({children}) => {
  return (
    <div className={classes.container}>
        {children}
    </div>
  )
}

export  { Container };