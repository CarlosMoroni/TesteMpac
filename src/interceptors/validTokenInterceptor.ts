import { AxiosInstance } from 'axios';
import { LoginService } from '../services/LoginService';

const validTokenInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        alert('Token Invalido, retornando para o login')
        LoginService.logout();
      }
      return Promise.reject(error);
    }
  );
};

export default validTokenInterceptor;