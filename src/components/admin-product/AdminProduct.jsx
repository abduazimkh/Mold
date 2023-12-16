import React, { useState } from "react";
import { FiChevronRight, FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import c from "./AdminProduct.module.css";
import { delete__product } from "../../redux/actions/manage";
import { connect, useSelector } from "react-redux";
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import EyeModal from "../eye-modal/EyeModal";
import { useTranslation } from "react-i18next";

const AdminProduct = (props) => {
  const { t}  = useTranslation();
  const { language } = useSelector(state => state.lang);
  const [deleteModal, setDeleteModal] = useState(false);
  const [eyeValue, setEyeValue] = useState(null);
  const handleDeleteProduct = () => {
    props.delete__product(props?.data?._id);
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  };
  return (
    <>
      <div className={c.admin__product}>
        <div className={c.image__container}>
          <img
            className={c.admin__productimage}
            src={props.data.productImages[0]}
            alt=""
          />
        </div>
        <div className={c.product__info}>
          {
            language === "uz"?
            <h1>{props.data?.productName_uz.substring(0, 100)} {props?.data?.productName_uz?.length >= 100 ? "..." : ""}</h1>
            :
            <h1>{props.data?.productName_ru.substring(0, 100)} {props?.data?.productName_ru?.length >= 100 ? "..." : ""}</h1>
          }
          <div className={c.info__cost}>
            <p className={c.product__infocost}>
              {props.data.productSizesAndQuantity[0].price} CУМ -{" "}
              {
                props.data.productSizesAndQuantity[
                  props.data.productSizesAndQuantity.length - 1
                ].price
              }{" "}
              CУМ
            </p>
          </div>
          <div className={c.product__inforoute}>
            {t("adminProduct.maincategory")}: <p> {language === "uz" ? props.data.productMainCategory_uz : props.data.productMainCategory_ru}</p>{" "}
            <FiChevronRight />{" "}
            <p style={{ marginRight: "50px" }}>
              {language === "uz" ? props.data.productSubCategory_uz : props.data.productSubCategory_ru}
            </p>
          </div>
        </div>
        <div className={c.product__management}>
          <button onClick={() => setDeleteModal(true)}>
            <FiTrash2 /> {t("adminProduct.delete")}
          </button>
          <Link to={{pathname: "/admin/create", state: props.data}}>
            <FiEdit />{t("adminProduct.edit")}
          </Link>
          <button
            onClick={(e) => {
              setEyeValue(() => setEyeValue(props.data));
            }}
          >
            <FiEye /> {t("adminProduct.see")}
          </button>
        </div>
      </div>
      {eyeValue && (
        <EyeModal
          setEyeValue={setEyeValue}
          eyeValue={eyeValue}
        />
      )}
       {deleteModal && <Modal title="Mahsulotni o'chirish" description="Haqiqatdan ham, mahsulotni o'chirmoqchimisiz?" yes={handleDeleteProduct} no={setDeleteModal} modal={deleteModal}/>}
    </>
  );
};

export default connect(null, { delete__product })(AdminProduct);
