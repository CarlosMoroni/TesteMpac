import axios from "axios";
import { AuthInterceptor } from "../interceptors/authInterceptor";
import validTokenInterceptor from "../interceptors/validTokenInterceptor";

const api = axios.create({
    baseURL: "https://openingteste.mpac.mp.br/",
    headers: {
        "Content-Type": "application/json",
    }
});
AuthInterceptor(api);
validTokenInterceptor(api);

export default api;