// eslint-disable-next-line
import React from 'react';
import c from './Modal.module.css';
import {t} from "i18next"

const Modal = (props) => {  
  return (
    <div className={c.modalfade}>
      <div className={c.modal__container}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={c.button__wrapper}>
          <button onClick={() => {
            props.yes()
            props.no(false);
          }}>{t("modal_yes")}</button>
          <button onClick={() => props.no(false)}>{t("modal_no")}</button>
        </div>
      </div>
    </div>
    
  )
}

export default Modal
