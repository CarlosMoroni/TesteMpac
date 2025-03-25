import { Vagas } from "../models/Vagas";
import api from "./api";

export const VagasServices = {
    getAllVagas: async () => {
        try {
            const baseURL = "/api/v1/openings"
            const vagas = await api.get(baseURL);
            return vagas.data.message
        } catch (error) {
            console.error("Erro ao buscar vagas: ", error);
            throw error;
        }
    },
    
    getByIdVagas: async (id: number) => {
        try {
            const baseURL = `/api/v1/opening?id=${id}`
            const vaga = await api.get(baseURL);
            return vaga.data.message;
        } catch (error) {
            console.error("Erro no getByIdVagas: ", error);
            throw error;
        }
    },
    
    saveVagas: async (objVaga: Vagas) => {
        try {
            if(objVaga.id) {
                const baseURL = `/api/v1/opening?id=${objVaga.id}`
                const updatedVaga = await api.put(baseURL, objVaga)
                return updatedVaga.data;
            } else {
                const baseURL = `/api/v1/opening`
                const vaga = await api.post(baseURL, objVaga)
                return vaga.data;
            }
        } catch (error) {
            console.error("Erro no saveVaga: ", error);
            throw error;
        }
    },
    
    deleteVaga: async (id:number) => {
        try {
            const baseURL = `/api/v1/opening?id=${id}`
            return api.delete(baseURL)
        } catch (error) {
            console.error("Erro no deleteVaga: ", error);
            throw error;
        }
    }
}
