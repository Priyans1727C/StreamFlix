import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`,  // If API requires Bearer Token
  },
});

export default axiosInstance;
