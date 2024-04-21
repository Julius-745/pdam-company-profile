import axios from "axios";

const axiosMedia =  axios.create({
   baseURL: import.meta.env.BASE_URL
});
export default axiosMedia;