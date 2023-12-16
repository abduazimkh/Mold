import React, { useState } from 'react';
import { FiCheckCircle, FiTrash2, FiX } from 'react-icons/fi';
import c from './OrderIndetail.module.css';
import Modal from '../modal/Modal';
import {useTranslation} from "react-i18next"
import { useSelector } from 'react-redux';

const OrderIndetail = ({setOrderDetailsInfo, orderDetailsInfo, orderMainDetails, totalSum, totalCount, handleDelete, handleContacted}) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const {language} = useSelector(state => state.lang);
  const { t } = useTranslation();
  return (
    <>
    <div className={c.order__indetailfade}>
      <div className={c.order__indetail}>
        <button className={c.cancel__btn} onClick={()=> setOrderDetailsInfo(null)}><FiX/></button>
        <div className={c.order__indetdailtitle}>
          <h1>{t("OrderIndetail.title")}</h1>
        </div>
        <div className={c.order__container}>
          <div className={c.order__itemsRenederer}>
            {
              orderDetailsInfo?.orderedproducts.map((item) => 
                <div key={item.product?._id} className={c.order__itemIndividual}>
                  <img src={item.product.productImages[0]} alt="" />
                  <div className={c.order__productDetail}>
                    <h1>{language === "uz" ? item.product?.productName_uz : item.product?.productName_ru} - {item.size}</h1>
                    <div className={c.product__sept}>
                      <p>{t("OrderIndetail.order_quantity")}  <span>{item?.quantity} ta</span></p>
                      <p>{t("OrderIndetail.price")}  <span>{item?.cost?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</span></p>
                    </div>
                    <div className={c.product__sept}>
                      <p>{t("OrderIndetail.time")}  <span>{orderMainDetails.orderedAt?.replace(/"/g, "")}</span></p>
                      <p>{t("OrderIndetail.allQuant")}  <span>{`${item?.quantity * +item?.cost}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</span></p>
                    </div>
                  </div>
                </div>  
              )
            }
          </div>
          <div className={c.order__itemsAllDetails}>
            <h1>{orderMainDetails.fullname}</h1>
            <h2>{t("OrderIndetail.title2")}</h2>
            <p>{`${totalSum}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</p>
            <h2>{t("OrderIndetail.order_quantity2")}</h2>
            <p>{totalCount} ta</p>
            <button className={c.order__donebtn} onClick={() => setUpdateModal(true)}> <FiCheckCircle/>{t("OrderIndetail.btn1")}</button>
            <button className={c.order__deletebtn} onClick={() => setDeleteModal(true )}> <FiTrash2/>{t("OrderIndetail.btn2")} </button>
          </div>
          
        </div>

      </div>
    </div>
    {updateModal && <Modal title={t("OrderIndetail.title1")} description={t("OrderIndetail.desc1")} yes={handleContacted} no={setUpdateModal} modal={updateModal}/>}
    {deleteModal && <Modal title={t("OrderIndetail.btn2")}description={t("OrderIndetail.desc2")} yes={handleDelete} no={setDeleteModal} modal={deleteModal}/>}
    </>
  )
}

export default OrderIndetail
