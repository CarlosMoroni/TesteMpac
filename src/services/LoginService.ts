import api from "./api";

import { Usuario } from "../models/Usuario";

export const login = async(usuario: Usuario) => {
    try {
        const response = await api.post("/api/v1/login", usuario);
        const token = response.data.message;
        console.log(token);
        window.location.href = "/";
    } catch (error) {
        console.error("Erro ao fazer login: ", error);
    }
}