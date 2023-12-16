import {ORDER_SUCCESS, ORDER_LOADING, ORDER_FAILED, ORDER_CLEAR} from './types';
import authApiInstance from '../../api/private/private_api_instance';
import unAuthApiInstance from '../../api/public/public_api_instance';

export const order_success = (message) => {
  return {
    type: ORDER_SUCCESS,
    message,
    status: "success"
  }
}


export const order_failed = (message) => {
  return {
    type: ORDER_FAILED,
    message: {
      uz: "smth uz",
      ru: "smth ru"
    },
    status: "error"
  }
}

export const order_loading = () => {
  return {
    type: ORDER_LOADING
  }
}

export const order_clear = () => {
  return {
    type: ORDER_CLEAR
  }
}

export const order = (order__data) => async dispatch => {
  dispatch(order_loading());
  unAuthApiInstance.post('order/create-order', order__data)
    .then(response => {
      dispatch(order_success(
        {
        uz: "Muvaffaqiyatli buyurtma berdingiz!",
        ru: "Ru alert"
        }))
    })
    .catch(err => {
      dispatch(order_failed(err.response?.data.message))
    })
}

export const order_contact = (order_id) => async dispatch => {
  dispatch(order_loading());
  authApiInstance.patch(`order/update-single-order/${order_id}`)
    .then(response => {
      dispatch(order_success(response.data?.message))
    })
    .catch(err => {
      dispatch(order_failed(err.response.data.message))
    })
}

export const order_delete = (order_id) => async dispatch => {
  dispatch(order_loading());
  authApiInstance.delete(`order/delete-single-order/${order_id}`)
    .then(response => {
      dispatch(order_success(response.data?.message))
    })
    .catch(err => {
      dispatch(order_failed(err.response.data.message))
    })
}