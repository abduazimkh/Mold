import React, { useState } from 'react';
import { FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import c from './ProductView.module.css';
import { addToCart } from '../../redux/actions/cart';
import { connect, useSelector } from 'react-redux';  
import {ReactComponent as Cart} from '../../assets/admin/cart.svg';
import { FaRegDotCircle } from 'react-icons/fa';
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

function useForceUpdate(){
  // eslint-disable-next-line
  const [value, setValue] = useState(0); 
  return () => setValue(value => value + 1);
}

const ProductView = (props) => {
  const { t } =useTranslation() 
  const { language } = useSelector(state => state.lang);
  const [mainImageOrder, setMainImageOrder] = useState(0);
  const [sizeOrder, setSizeorder] = useState(0);
  const [productCount, setProductCount] = useState(1);  

  

  const forceUpdate = useForceUpdate();
  const addToCartWithSelection = (selectedProduct) => {
      const _id = uuidv4();
      const selectedSize = selectedProduct.productSizesAndQuantity[sizeOrder]?.size
      const cost = selectedProduct.productSizesAndQuantity[sizeOrder]?.price;
      const totalQuantity = selectedProduct.productSizesAndQuantity[sizeOrder]?.quantity; 
      props.addToCart(selectedProduct, productCount, selectedSize, _id, cost, totalQuantity);
      setSizeorder(0);
      setProductCount(1);
      forceUpdate();
      toast.success( language === "uz" ? "Маҳсулот саватга қўшилди!" :"Продукт был добавлен в корзину!")
  }

  
  return (
    <div className={c.product__view}>
     
      <div className={c.product__image_wrapper}>

      <img alt="" src={props.product?.productImages[mainImageOrder]} className={c.product__main__image} />
        <div className={c.product__image__container}>
          {
            props?.product?.productImages?.map((image, index) => 
              <img key={index} style={mainImageOrder === index ? {border: "3px solid var(--main-background-color)"} : null} onClick={() => setMainImageOrder(index)} className={c.selector__image} src={image} alt="" />  
            )
          }
        </div>
      </div>
      <form className={c.product__info}>
          <h1>{language === "uz" ? props?.product?.productName_uz : props?.product?.productName_ru}</h1>
          <div className={c.direction__wrapper}>
            <div className={c.direction__category}>{language === "uz" ? props?.product?.productMainCategory_uz : props?.product?.productMainCategory_ru}</div> <FiChevronRight/>
            <div className={c.direction__category}>{language === "uz" ? props?.product?.productSubCategory_uz : props?.product?.productSubCategory_ru}</div>
          </div>
          <div className={c.product__select}>
            <h2 className={c.quantity}>{t("ProductView.quant")} <span style={{color: "var(--main-success-backgroundcolor)"}}>{props?.product?.productSizesAndQuantity[sizeOrder]?.quantity}</span></h2>
            <h2 className={c.quantity} style={{flex: 0, marginRight: "10px"}}>{t("ProductView.size")} </h2>
            <select onChange={(e) => {
              setSizeorder(+e.target.value)
              setProductCount(1)
              forceUpdate()
            }}>
              {
                props?.product?.productSizesAndQuantity?.map(({size}, index) => 
                  <option key={index} value={index}> {size} </option>  
                )
              }
            </select>
          </div>
          <h1 className={c.product__selectedcost}>{props?.product?.productSizesAndQuantity[sizeOrder]?.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</h1>
          <div className={c.product__items}>
            <div className={c.item__wrapper}>
            {
             language === "uz" ? props?.product?.productDescription_uz?.slice(0, 6).map((item, index) => 
                  <div key={index} className={c.info__item}> <FaRegDotCircle/> {item}</div>
              ) : props?.product?.productDescription_ru?.slice(0, 6).map((item, index) => 
                <div key={index} className={c.info__item}> <FaRegDotCircle/> {item}</div>
            )
            }
            </div>
            <div className={c.item__wrapper}>
            {
              language ==="uz" ? props?.product?.productDescription_uz?.slice(6, props?.product?.productDescription_ru?.length).map((item, index) => 
                  <div key={index} className={c.info__item}> <FaRegDotCircle/> {item}</div>
              ) : props?.product?.productDescription_ru?.slice(6, props?.product?.productDescription_ru?.length).map((item, index) => 
                <div key={index} className={c.info__item}> <FaRegDotCircle/> {item}</div>
            )
            }
            </div>
          </div>

          <div className={c.product__controller}>
              <div className={c.counterContainer}>
                <h2>{t("ProductView.productQuant")} </h2>
                <div className={c.counter}>
                  <button type="button" onClick={() => {
                    if(productCount === 1){
                      setProductCount(1)
                    }
                    else{
                      setProductCount(prev => prev - 1)
                    }
                    forceUpdate()
                  }}><FiMinus/> </button>
                  <p>{productCount}</p>
                  <button type="button" onClick={() => {
                    if(productCount === +props?.product?.productSizesAndQuantity[sizeOrder]?.quantity){
                      setProductCount(+props?.product?.productSizesAndQuantity[sizeOrder]?.quantity)
                    }
                    else{
                      setProductCount(prev => prev + 1)
                    }
                    forceUpdate()
                  }}> <FiPlus/> </button>
                </div>
              </div>
              <div className={c.totalCost}>
                  <h2>{t("ProductView.allprice")} </h2>
                  <div>{String(productCount * +props?.product?.productSizesAndQuantity[sizeOrder]?.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</div>
              </div>
              <div className={c.addtocart}>
                <h2>.</h2>
                  <button type="reset" onClick={() => addToCartWithSelection(props.product)}> <Cart /> <span>{t("ProductView.addToCart")}</span></button>
              </div>
          </div>
      </form>
    </div>
  )
}

export default connect (null, { addToCart })(ProductView)
