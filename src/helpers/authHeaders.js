import { auth__out } from "../redux/actions/auth";
import { store } from '../redux/store';

const authHeaders = () => {
  const token = localStorage.getItem("token");

  if(token){
    return `Bearer ${token}`;
  }
  else{
      store.dispatch(auth__out());
      return
  }
  
}

export default authHeaders;