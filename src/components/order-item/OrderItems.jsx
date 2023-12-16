import React, { useState } from 'react';
import { FiCheckCircle, FiInfo, FiPhoneCall, FiTrash2 } from 'react-icons/fi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import c from './OrderItems.module.css';
import { order_contact, order_delete } from '../../redux/actions/order'
import OrderIndetail from '../order-indetail/OrderIndetail';
import { connect, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const OrderItems = (props) => {
  const { t } = useTranslation();
  const {language} = useSelector(state => state.lang);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [orderDetailsInfo, setOrderDetailsInfo] = useState(null);
  const totalCount = props.orderDetails?.orderedproducts.reduce((a, b) => ({quantity: a?.quantity + b?.quantity}))?.quantity;
  const totalSum = props.orderDetails?.orderedproducts.map(order_product => +order_product.cost * order_product.quantity)?.reduce((a, b)=> a + b);

  const handleContacted = () => {
    props.order_contact(props.orderDetails?._id)
    setUpdateModal(false);
    toast.success( language === "uz" ? "Муваффақиятли ўзгартирилди" : "Успешно изменено")
    
  }

  const handleDelete = () => {
    props.order_delete(props.orderDetails?._id)
    setUpdateModal(false);
    toast.success( language === "uz" ? "Муваффақиятли ўчирилди" : "Успешно удалено")
  }

  return (
    <>
    <div className={c.order__item}>
      <div className={c.order__topSection}>
        <div className={c.order__itemavatar}>
          <BsFillCartCheckFill/>
        </div>
        <div className={c.topSection__details}>
          <div>
            <h1>{props.orderDetails?.fullname}</h1>
            <h2>{props.orderDetails?.phonenumber}</h2>
          </div>
          <a href={`tel: ${props.orderDetails?.phonenumber}`} className={c.call__order}><FiPhoneCall/></a>
        </div>
        
      </div>
      {
          props.orderDetails?.contacted ?
          <div className={c.contact} style={{color: "#0AB64F",background: "#c7ffb957",border: "1px solid #23d50663"}}>
            <div className={c.status} style={{backgroundColor: "#0AB64F"}}></div>
            <p>{t("contact")}</p>
          </div>
          :
          <div className={c.contact} style={{color: "rgba(185, 10, 10, 0.4)",background: "rgba(248, 149, 128, 0.34)",border: "1px solid rgba(185, 10, 10, 0.4)"}}>
            <div className={c.status} style={{backgroundColor:"#B90A0A"}}></div>
            <p>{t("OrderItems.indicator")}</p>
          </div>
        }
        <p className={c.order__time}>{t("OrderItems.order__time")}<span>{props.orderDetails?.orderedAt?.replace(/"/g, "")}</span></p>
       <div className={c.order__quantityandcost}>
        <p className={c.order__count}>{t("OrderItems.order__count")} <span>{totalCount} ta</span></p>
        <p className={c.order__cost}>{t("OrderItems.order__cost")} <span>{`${totalSum}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} CУМ</span></p>
       </div>
       <div className={c.order__controller}>
       <button className={c.order__indetail} onClick={() => setOrderDetailsInfo(props.orderDetails)}> <span className={c.text_btn}>{t("OrderItems.order__indetail")}</span> <FiInfo className={c.icon_btn}/> </button>
       <button className={c.order__contacted} onClick={() => setUpdateModal(true)}> <span  className={c.text_btn}>{t("OrderItems.order__contacted")}</span> <FiCheckCircle className={c.icon_btn}/> </button>
      
       <button className={c.order__delete} onClick={() => setDeleteModal(true)}> <span  className={c.text_btn}>{t("OrderItems.order__delete")}</span> <FiTrash2 className={c.icon_btn}/> </button>
       </div>
       {orderDetailsInfo && <OrderIndetail handleDelete={handleDelete} handleContacted={handleContacted} setOrderDetailsInfo={setOrderDetailsInfo} orderDetailsInfo={orderDetailsInfo} orderMainDetails={props.orderDetails} totalSum={totalSum} totalCount={totalCount}/>}
    </div>
     {updateModal && <Modal title={t("OrderItems.title1")} description={t("OrderItems.desc1")} yes={handleContacted} no={setUpdateModal} modal={updateModal}/> }
     {deleteModal && <Modal title={t("OrderItems.title2")} description={t("OrderItems.desc2")} yes={handleDelete} no={setDeleteModal} modal={deleteModal}/>}

    </>
  )
}

export default connect(null, { order_contact, order_delete }) (OrderItems)
