import React from 'react';
import OrderItems from '../order-item/OrderItems';
import c from './AllOrders.module.css';

const AllOrders = ({data}) => {
  return (
    <div className={c.all__orders}>
      {
        data?.map(orderDetails => 
          <OrderItems key={orderDetails?._id} orderDetails={orderDetails}/>  
        )
      }
    </div>
  )
}

export default AllOrders
