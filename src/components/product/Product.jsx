import React from 'react';
import { FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import Button from '../../utils/Button';
import { FaRegHandPointUp } from 'react-icons/fa';
import c from './Product.module.css';
import { addToCart } from '../../redux/actions/cart';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

const Product = (props) => {
  const {t} = useTranslation()
  const {language} = useSelector(state => state.lang);
  const handleAddToCart = () => {
    const _id = uuidv4();
    const product = props.productData;
    product.cost = props?.productData?.productSizesAndQuantity[0]?.price;
    props.addToCart(product, 1, product.productSizesAndQuantity[0].size, _id, product.productSizesAndQuantity[0].price, +product.productSizesAndQuantity[0].quantity);
  }
  return (
    <div className={c.product}>
      <Link to={`/product-view/${props.productData?._id}`}>
      <img className={c.product__image} src={props.productData?.productImages[0]} alt="" />
      </Link>
      <h2 className={c.product__title}>{language === "uz" ? props.productData?.productName_uz?.substring(0, 50) : props.productData?.productName_ru?.substring(0, 50)} {language === "uz" ? props.productData?.productName_uz?.length > 50 ? '...' : "" : props.productData?.productName_ru?.length > 50 ? '...' : ""} </h2>
      <div className={c.product__categoryWrapper}>
        <div className={c.product__category}>{language === "uz" ? props.productData?.productMainCategory_uz : props.productData?.productMainCategory_ru}</div> <FiChevronRight/><div className={c.product__category}>{language === "uz" ? props.productData?.productSubCategory_uz : props.productData?.productSubCategory_ru}</div>
      </div>
      <div className={c.product__price}>
        <h2 className={c.product__startingprice}>{`${String(props.productData?.productSizesAndQuantity[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ ${props.productData?.productSizesAndQuantity.length > 1 ? "- " + props.productData?.productSizesAndQuantity[props.productData?.productSizesAndQuantity.length - 1].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " CУМ" : ""}`}</h2>
        <h2 className={c.product__startingprice}>{props.productData?.productEndPrice}</h2>
      </div>
      {props.productData?.productSizesAndQuantity.length === 1 ? <Button onClick={handleAddToCart} title={t("Product.title")} icon={<FiShoppingCart/>}/> : <Link to={`/product-view/${props.productData?._id}`} className={c.select__link}> <FaRegHandPointUp/> {language === "uz" ? "Танлаш" : "Выбор"}</Link>}
    </div>
  )
}

export default connect(null, { addToCart }) (Product)
