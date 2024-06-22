import axios from "axios";

const baseURL= import.meta.env.VITE_BACKEND || "https://eventime-production.up.railway.app/api";
    
const client = axios.create({
    baseURL,
    withCredentials: true,
});
    
export default client;  