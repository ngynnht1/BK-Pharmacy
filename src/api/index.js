import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:9000/api',
  // baseURL: "http://localhost/OrderFood_PHP/api",
  baseURL: "http://localhost/pharmacy_php/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const ghnApi = axios.create({
  baseURL: "https://dev-online-gateway.ghn.vn/shiip/public-api",
  headers: {
    "Content-Type": "application/json",
    "token": "f30974be-e9b9-11ed-bc91-ba0234fcde32",
  },
});

export default api;
