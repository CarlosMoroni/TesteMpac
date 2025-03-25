const AuthService = {
    isAuthenticated: (): boolean => {
        const token = sessionStorage.getItem("token");
        const tokenExpiration = sessionStorage.getItem("tokenExpiration");
        const currentTime = Math.floor(Date.now() / 1000);

        if(!token || !tokenExpiration) {
            return false;
        }

        if (Number(tokenExpiration) < currentTime) {
            console.warn("Token expirado! Redirecionando para login...");
            return false;
        }
      
        return true
    },
}

export default AuthService;