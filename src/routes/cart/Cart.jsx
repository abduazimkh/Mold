import React, { useEffect, useState } from 'react';
import c from './Cart.module.css';
import { connect, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { order, order_clear } from '../../redux/actions/order';
import empty from '../../assets/box.png';
import { removeAllFromCart } from '../../redux/actions/cart';
import CartItem from '../../components/cart-item/CartItem';
import { useTranslation } from 'react-i18next';
const TEST_PHONENUMBER_REGX = /^\d{9,9}$/;
const TEST_FULLNAME_REGX =  /^([\w]{3,})+\s+([\w\s]{3,})+$/i;


const Cart = (props) => {
  const { t } = useTranslation();
  const {language } = useSelector(state => state.lang);
  const orderstate = useSelector(state => state.order);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isFullnameValid, setIsFullnameValid] = useState(false);
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const {cart} = useSelector(state => state.cart);
  const total = cart.map(product => product?.quantity).reduce((a, b) => a + b, 0);
  const totalcost = cart.map(product => product.quantity *  +product.cost).reduce((a, b) => a + b, 0)
  useEffect(() => {
    const phonenumberValid = TEST_PHONENUMBER_REGX.test(phonenumber);
    setIsPhoneValid(phonenumberValid)
  }, [phonenumber])

  useEffect(() => {
    const fullnameValid = TEST_FULLNAME_REGX.test(fullname);
    setIsFullnameValid(fullnameValid);
  }, [fullname])

  const createOrder = (e) => {
    e.preventDefault();
    props.order({
      fullname,
      phonenumber,
      orderedproducts: cart
    })
    
  }

  useEffect(() => {
    if(orderstate.status === "success"){
      toast.success(language === "uz" ? "Муваффақиятли буюртма бердингиз!" : "Вы успешно заказали!");
      props.removeAllFromCart()
      props.order_clear()
    }
    else if(orderstate.status === "error"){
      toast.error(language === "uz" ? "Буюртма беришда хатолик!" : "Ошибка при заказе!")
    }
  }, [orderstate, props, language])
  

   return(
     <div className={c.cart}>
        <div className={c.cart__top}>
        <h1 className={c.title__route}>{t("Cart.title")}</h1>
       {cart.length >= 1 && <button onClick={() => {
          props.removeAllFromCart()
          toast.success("Barcha mahsulotlar savatdan o'chirildi!")
          }}>{t("Cart.deleteAll")}</button>}
        </div>
        <div className={c.cart__main}>
       { 
        cart.length < 1 ? 
          <div className={c.empty__cart}>
            <h1>{t("Cart.empty")}</h1>
            <img src={empty} alt="" />
            <p onClick={() => props.setCartOpen(false)}>{t("Cart.buy")}</p>
          </div>
          :
          <>
       <div className={c.cart__container}>
          {
            cart?.map((cart__product, index) => 
              <CartItem ind={index} cart__product={cart__product} key={index}/>
            )
          }
        </div>
        <div className={c.cart__submission}>
          <h2>{t("Cart.quant")} {total}</h2>
          <h1>{`${totalcost}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</h1>
          <form onSubmit={createOrder}>
              <input value={fullname} onChange={e => setFullname(e.target.value)} required minLength={3} type="text" placeholder={t("Cart.placeholder1")}/>
              {!isFullnameValid && fullname.length >= 1 && <p className={c.phone__numbervalidation} style={{marginLeft: "10px"}}>{t("Cart.fName")}</p>}
              <input value={phonenumber} onChange={e => setPhonenumber(e.target.value)}  required type="text" placeholder="Телефон (991234567)"/>
              {!isPhoneValid && phonenumber.length >= 1 && <p  className={c.phone__numbervalidation}>{t("Cart.incorrectPhone")}</p>}
              <button>{t("Cart.order")}</button>
          </form>
        </div>
        </>
        }
        </div>
     </div>
   )
  
}

export default connect( null,  { order, removeAllFromCart, order_clear }) (Cart)
