// import { useAuthStore } from "../stores/auth";
import axios from "axios";
import UserService from "@app/services/UserService";
import { transformReq } from "./helper";

const HTTP = axios.create({
  baseURL: `${import.meta.env.VITE_PUBLIC_API_URL}`
})

HTTP.interceptors.request.use((req) => {
  const token = UserService.getToken()
  if (token && req.headers) {
    req.headers['Authorization'] = `Bearer ${token}`
  }
  if(req.method === 'get'){
   req.params =  transformReq(req.params)
  }
  return req;
})

HTTP.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const data = err.response && err.response.data;
    if (err.response && err.response.status === 401 && Event !== undefined) {
      UserService.doLogout();
    }
    console.error('HTTP error: ', err);
    err.message = data?.message || err.message;
    throw err;
  } 
)



export default HTTP;