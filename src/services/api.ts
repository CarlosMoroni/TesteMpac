import axios from "axios";
import { AuthInterceptor } from "../interceptors/authInterceptor";

const api = axios.create({
    baseURL: "https://openingteste.mpac.mp.br/",
    headers: {
        "Content-Type": "application/json",
    }
});
AuthInterceptor(api);

export default api;