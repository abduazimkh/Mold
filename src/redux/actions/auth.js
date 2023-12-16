import {AUTH_LOADING, AUTH_FAIL, AUTH_SUCCESS, AUTH_CLEAR, AUTH_OUT} from './types';
import unAuthApiInstance from '../../api/public/public_api_instance';

export const auth__success = (token, id) => {
  return{
    type: AUTH_SUCCESS,
    payload:{
      token,
      id
    }
  }
}

export const auth__fail = (error) => {
  return{
    type: AUTH_FAIL,
    payload: error
  }
}

export const auth__loading = () => {
  return{
    type: AUTH_LOADING
  }
}

export const auth__clear = () => {
  return{
    type: AUTH_CLEAR
  }
}

export const auth__out = () => {
  return {
    type: AUTH_OUT
  }
}


export const auth = (URL, ADMIN_CREDENCIALS) => async dispatch => {
  dispatch(auth__loading())
  unAuthApiInstance.post(URL, ADMIN_CREDENCIALS, {timeout: 10000})
    .then(response => dispatch(auth__success(response?.data?.token, response?.data?.user?._id)))
    .catch(error => dispatch(auth__fail(error?.response?.data?.message)))
}