import React from 'react';
import c from './Button.module.css';

const Button = ({type, title, custom_style, counter, icon, onClick}) => {
  return (
    <button onClick={onClick} type={type} className={c.u_button} style={custom_style}>
      {icon && icon}
      <p>{title}</p>
      {counter && <p className={c.button__counter}>{counter}</p>}
    </button>
  )
}

export default Button
