import axios from "axios";
import { store } from "../../redux/store";
import { auth__out } from "../../redux/actions/auth";
// import authHeaders from "../../helpers/authHeaders";

const authApiInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000
});


authApiInstance.interceptors.request.use(
  (request) => {
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token
    return request
  },
  (error) => {
    return Promise.reject(error);
  }
);


authApiInstance.interceptors.response.use(
  (response) => {
    if (response) return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      store.dispatch(auth__out());
    }
    return Promise.reject(error);
  }
);

export default authApiInstance;
