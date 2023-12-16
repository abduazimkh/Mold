import axios from 'axios';
import { auth__out } from "../../redux/actions/auth";
import { store } from '../../redux/store';

const unAuthApiInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASEURL,
    headers: { 
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

unAuthApiInstance.interceptors.response.use(
    (response) => {
      if (response) return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        store.dispatch(auth__out());
      }
      return Promise.reject(error);
    }
  );

export default unAuthApiInstance;