import axios from "axios";

const axiosData = axios.create({
   baseURL: import.meta.env.BASE_URL,
    timeout: 5000
});

export default axiosData;