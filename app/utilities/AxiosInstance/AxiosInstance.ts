import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
