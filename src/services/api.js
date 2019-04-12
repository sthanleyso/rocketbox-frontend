import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend-stl.herokuapp.com"
});

export default api;
