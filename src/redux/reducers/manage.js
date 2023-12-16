import { MANAGE_DELETE_SUCCESS, MANAGE_DELETE_FAILED} from '../actions/types';

const initialState = {
  error: '',
  url:'product/all'
}

const manage = (state = initialState, {type, payload}) => {
  switch(type){
    case MANAGE_DELETE_SUCCESS:
    case "LOAD_MANAGE":
      return{
        error: '',
        url: "product/all"
      }
    case MANAGE_DELETE_FAILED:
      return{
        error: "smth went wrong"
      }
    default:
      return state
  }
}

export default manage;