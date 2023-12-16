import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, PLUS_COUNTER_PRODUCT, MINUS_COUNTER_PRODUCT } from './types';

export const addToCart = (product, quantity, size, _id, cost, totalQuantity) => {
  return{
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: quantity || 1,
      size,
      _id,
      cost,
      totalQuantity
    }
  }
}

export const removeFromCart = (productId) => {
  return{
    type: REMOVE_FROM_CART,
    payload: {
      productId
    }
  }
}

export const removeAllFromCart = () => {
  return{
    type: CLEAR_CART
  }
}

export const increaseQuantity = (index, count) => {
  return {
    type: PLUS_COUNTER_PRODUCT,
    payload: {
      index, count
    }
  }
}

export const decreaseQuantity = (index, count) => {
  return {
    type: MINUS_COUNTER_PRODUCT,
    payload: {
      index, count
    }
  }
}