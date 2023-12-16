import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, PLUS_COUNTER_PRODUCT, MINUS_COUNTER_PRODUCT } from '../actions/types';

const inititalState = {
  cart: []
}

const cart = (state = inititalState, action) => {
  const { type, payload } = action; 
  switch(type){
    case ADD_TO_CART:
      return {
        cart: [...state.cart, payload]
      }
    case REMOVE_FROM_CART:
      const newCart = [...state.cart];
      if(payload.productId >= 0){
        newCart.splice(payload.productId, 1)
      }
      return{
        cart: newCart
      }

    case PLUS_COUNTER_PRODUCT:
      const productTobeIncreased = state.cart.at(payload.index);
      var newCartPlus = [...state.cart];

      if(+productTobeIncreased.quantity < +productTobeIncreased.totalQuantity){
        productTobeIncreased.quantity = productTobeIncreased.quantity + payload.count
        newCartPlus.splice(payload.index, 1, productTobeIncreased)
      }
      return{
        cart: newCartPlus
      }
    case MINUS_COUNTER_PRODUCT:
      const productTobeDecreased = state.cart.at(payload.index);
      var newCartMinus = [...state.cart]
      if(productTobeDecreased.quantity > 1){
        productTobeDecreased.quantity = productTobeDecreased.quantity - payload.count
        newCartMinus.splice(payload.index, 1, productTobeDecreased)
      }
        return{
          cart: newCartMinus
        }

    case CLEAR_CART:
        return{
          cart: []
        }
    default:
      return state
  }
}

export default cart;