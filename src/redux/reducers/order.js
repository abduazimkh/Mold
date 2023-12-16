import {ORDER_SUCCESS, ORDER_LOADING, ORDER_FAILED, ORDER_CLEAR} from '../actions/types';


const initialState = {
  message: null,
  loading: false,
  status: '',
  url: "order/all-orders"
}

export const order = (state = initialState, {type, message, status}) => {
  switch(type){
    case ORDER_SUCCESS:
    case "LOAD":
      return {
        message,
        loading: false,
        status,
        url: "order/all-orders"
      }
    case ORDER_FAILED:
      return {
        message,
        loading: false,
        status
      }
    case ORDER_LOADING:
      return {
        message: null,
        loading: true,
        status: ""
      }
    case ORDER_CLEAR:
        return {
          message: null,
          loading: true,
          status: ""
        }
    default:
      return state
  }
}

export default order;