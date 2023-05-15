import axios from "axios";
const baseURL = "http://64.226.109.201:8080/api"
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}`,
});

export default axiosInstance;