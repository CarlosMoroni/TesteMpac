import { AxiosInstance } from "axios";

export const AuthInterceptor = (api: AxiosInstance) => {
    api.interceptors.request.use(
        (config) => {
            const token = sessionStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
}