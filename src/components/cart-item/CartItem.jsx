import React, { useState } from 'react';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions/cart';
import { connect, useSelector } from 'react-redux';
import c from '../../routes/cart/Cart.module.css';
import { FiChevronRight, FiTrash2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";

function useForceUpdate(){  
  // eslint-disable-next-line
  const [value, setValue] = useState(0); 
  return () => setValue(value => value + 1);
}

const CartItem = (props) => {
  const {language } = useSelector(state  => state.lang);
  const { t} = useTranslation()
  const removeItemFromCart = () => {
    props.removeFromCart(props.ind)
    toast.success(language === "uz" ? "Маҳсулот саватдан ўчирилди!" : "Товар удален из корзины!")
  }
  const forceUpdate = useForceUpdate();
  return (
    <div  className={c.cart__item}>
                  <img src={props.cart__product?.product.productImages[0]} alt="" />
                  <div className={c.cart__info}>
                    <div>
                      <h1>{language === "uz" ? props.cart__product?.product.productName_uz : props.cart__product?.product.productName_ru}  </h1> <FiChevronRight/>   <b>{props.cart__product?.size}</b>
                    </div>
                    <h3>{props.cart__product?.cost?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</h3>

                    <div>
                      <h2 className={c.quantity__cart}>{t("ProductView.productQuant")} <button className={c.button__counter} onClick={() => {
                        if(props.cart__product?.quantity === 1){
                          props.decreaseQuantity(props.ind, 1);
                        }
                        else{
                          props.decreaseQuantity(props.ind, 1);
                        }
                        forceUpdate()
                      }}>-</button> {props.cart__product?.quantity} <button className={c.button__counter} 
                      onClick={() => {
                        props.increaseQuantity(props.ind, 1)
                        forceUpdate()
                      } } >+</button> </h2>
                      
                    </div>
                  </div>
                  <button className={c.cart__itemRemove} onClick={() => removeItemFromCart()}> <FiTrash2/> </button>

              </div>  
  )
}

export default connect(null, { removeFromCart, increaseQuantity, decreaseQuantity }) (CartItem)
