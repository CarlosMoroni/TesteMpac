import { AxiosInstance } from "axios";

export const loaderInterceptor = (api: AxiosInstance, setLoading: (isLoading: boolean) => void) => {
  api.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false); 
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );
};
