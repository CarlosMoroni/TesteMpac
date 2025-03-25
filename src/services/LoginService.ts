import api from "./api";
import { Usuario } from "../models/Usuario";


export const LoginService = {
    login: async(usuario: Usuario) => {
        try {
            const response = await api.post("/api/v1/login", usuario);
            const token = response.data.message;
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const tokenExpiration = decodedToken.exp * 1000;

            if (token) {
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("tokenExpiration", tokenExpiration.toString());
            }

            return true;
        } catch (error) {
            console.error("Erro ao fazer login: ", error);
            return false;
        }
    },
    
    logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("tokenExpiration");
    }
}