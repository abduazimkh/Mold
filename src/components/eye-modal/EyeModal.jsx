import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { FiChevronRight, FiMinus, FiPlus, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import c from "./EyeModal.module.css";
import { useTranslation } from 'react-i18next';

function EyeModal({ eyeValue, setEyeValue }) {
  const { t} = useTranslation();
  const { language } = useSelector(state => state.lang);
  const [mainImageOrder, setMainImageOrder] = useState(0);
  const [sizeOrder, setSizeorder] = useState(0);
  const [productCount, setProductCount] = useState(
    +eyeValue.productSizesAndQuantity[sizeOrder]?.quantity
  );
  return (
    <div className={c.eyeContainer}>
      <div className={c.eyeWrapper}>
        <button className={c.eyeCancelBtn} onClick={() => setEyeValue(null)}>
          <FiX />
        </button>
        <div className={c.eye_product__view}>
          <div className={c.eye_product__image_wrapper}>
            <img
              className={c.eye_product__main__image}
              src={eyeValue?.productImages[mainImageOrder]}
              alt=""
            />
            <div className={c.eye_product__image__container}>
              {eyeValue?.productImages?.map((image, index) => (
                <img
                  onClick={() => setMainImageOrder(index)}
                  key={index}
                  className={c.eye_selector__image}
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className={c.eye_product__info}>
            <h1>
              {language === "uz" ? eyeValue?.productName_uz : eyeValue?.productName_ru}
            </h1>
            <div className={c.eye_direction__wrapper}>
              <div className={c.eye_direction__category}>
                {language === "uz" ? eyeValue?.productMainCategory_uz : eyeValue?.productMainCategory_ru}
              </div>
              <FiChevronRight />
              <div className={c.eye_direction__category}>
                {language === "uz" ? eyeValue?.productSubCategory_uz : eyeValue?.productSubCategory_ru}
              </div>
            </div>
            <div className={c.eye_product__select}>
              <h2 className={c.eye_quantity}>
              {t("ProductView.quant")}
                <span style={{ color: "var(--main-success-backgroundcolor)" }}>
                  {eyeValue?.productSizesAndQuantity[sizeOrder]?.quantity}
                </span>
              </h2>
              <h2
                className={c.eye_quantity}
                style={{ flex: 0, marginRight: "10px" }}
              >
                {t("ProductView.size")}
              </h2>
              <select
                onChange={(e) => {
                  setSizeorder(+e.target.value);
                  setProductCount(
                    +eyeValue?.productSizesAndQuantity[+e.target.value]
                      ?.quantity
                  );
                }}
              >
                {eyeValue?.productSizesAndQuantity?.map(({ size }, index) => (
                  <option key={index} value={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <h1 className={c.eye_product__selectedcost}>
              {String(eyeValue?.productSizesAndQuantity[sizeOrder]?.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}  CУМ
            </h1>
            <div className={c.eye_product__items}>
              <div className={c.eye_item__wrapper}>
                {language === "uz" ? eyeValue?.productDescription_uz?.map((item, index) => (
                  <div key={index} className={c.eye_info__item}>
                    <FaRegDotCircle /> {item}
                  </div>
                )) : eyeValue?.productDescription_ru?.map((item, index) => (
                  <div key={index} className={c.eye_info__item}>
                    <FaRegDotCircle /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className={c.eye_product__controller}>
              <div className={c.eye_counterContainer}>
                <h2>{t("ProductView.productQuant")} </h2>
                <div className={c.eye_counter}>
                  <button
                    onClick={() => {
                      if (productCount === 1) {
                        setProductCount(1);
                      } else {
                        setProductCount((prev) => prev - 1);
                      }
                    }}
                  >
                    <FiMinus />
                  </button>
                  <p>{productCount}</p>
                  <button
                    onClick={() => {
                      if (
                        productCount ===
                        +eyeValue?.productSizesAndQuantity[sizeOrder]?.quantity
                      ) {
                        setProductCount(
                          +eyeValue?.productSizesAndQuantity[sizeOrder]
                            ?.quantity
                        );
                      } else {
                        setProductCount((prev) => prev + 1);
                      }
                    }}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className={c.eye_totalCost}>
                <h2>{t("ProductView.allprice")} </h2>
                <div>
                  {String(productCount *
                    +eyeValue?.productSizesAndQuantity[sizeOrder]?.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  CУМ
                </div>
              </div>
              <div className={c.addtocart}>
                <h2>.</h2>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EyeModal;
