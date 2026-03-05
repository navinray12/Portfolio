import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-server-j0pm.onrender.com/api"
});

export default API;