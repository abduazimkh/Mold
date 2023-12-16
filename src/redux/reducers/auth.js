import {AUTH_LOADING, AUTH_FAIL, AUTH_SUCCESS, AUTH_CLEAR, AUTH_OUT} from '../actions/types';

const initialState = {
  admin: null,
  token: '',
  isAuthenticated: false,
  loading: false,
  error: false,
  message: ''
}

const auth = (state = initialState, { type, payload}) => {
  switch(type){
    case AUTH_SUCCESS:
      localStorage.setItem("auth", payload?.id)
      localStorage.setItem("token", payload?.token)
      return {
        admin: payload?.id,
        token: payload?.token,
        isAuthenticated: true,
        loading: false,
        error: false,
        message: 'Successfully logged in!'
      }
    case AUTH_LOADING: 
      return{
        admin: null,
        token: '',
        isAuthenticated: false,
        loading: true,
        error: false,
        message: ''
      }
    case AUTH_FAIL: 
      return {
        token: '',
        isAuthenticated: false,
        loading: false,
        error: false,
        admin: false,
        message: payload?.message
      }
    case AUTH_OUT: 
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
      return {
        token: '',
        isAuthenticated: false,
        loading: false,
        error: false,
        admin: false,
        message: 'Successfully Signed out!'
      }
    case AUTH_CLEAR: 
      return{
          message: ''
      }
    default:
      return state
  }
}

export default auth;