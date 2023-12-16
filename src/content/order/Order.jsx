import React, { useEffect } from 'react';
import c from './Order.module.css';
import ContentTitle from '../../components/content-title/ContentTitle';
import AllOrders from '../../components/all-orders/AllOrders';
import useAuthFetch from '../../hooks/fetch-hooks/useAuthFetch';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'; 
import {t} from "i18next"

const Order = () => {
  useEffect(() => {
    store.dispatch({
      type: "LOAD"
    })
  }, [])
  const orderStatus = useSelector(state => state.order);
  const { data } = useAuthFetch(orderStatus.url)
  return (
    <div className={c.order}>
      <ContentTitle title={t("Order.title")} />
      <Redirect to="/admin/orders/all"/>
      <div className={c.order__filter}>
        <NavLink activeClassName={c.order__active} className={c.order__link} to="/admin/orders/all">{t("Order.link1")}</NavLink>
        <NavLink activeClassName={c.order__active}  className={c.order__link} to="/admin/orders/not-contacted">{t("Order.link2")}</NavLink>
        <NavLink activeClassName={c.order__active}  className={c.order__link} to="/admin/orders/contacted">{t("Order.link3")}</NavLink>
      </div>
      <Switch>
        <Route path="/admin/orders/all"  component={() => <AllOrders data={data?.allOrders}/>}/>
        <Route path="/admin/orders/not-contacted"  component={() => <AllOrders data={data?.allOrders?.filter(order => !order.contacted)}/>}/>
        <Route path="/admin/orders/contacted"  component={() => <AllOrders data={data?.allOrders?.filter(order => order.contacted)}/>}/>
      </Switch>
    </div>  
  )
}

export default Order
