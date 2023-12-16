import { MANAGE_DELETE_SUCCESS, MANAGE_DELETE_FAILED} from './types';
import authApiInstance from '../../api/private/private_api_instance';

export const manage__delete__success = () => {
  return {
    type: MANAGE_DELETE_SUCCESS
  }
}

export const manage__delete__failed = () => {
  return {
    type: MANAGE_DELETE_FAILED
  }
}

export const delete__product = (id) => async dispatch => {
  authApiInstance.delete(`/manage/delete/${id}`)
    .then(response => {
      if(response){
        dispatch(manage__delete__success())
      }
    })
    .catch(err => {
      dispatch(manage__delete__failed())
    })
}