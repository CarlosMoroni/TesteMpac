import { useState } from "react";
import { Usuario } from "../../models/Usuario";
import { LoginService } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css'

function LoginPage() {
  const [usuario, setUsuario] = useState<Usuario>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };
  
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const loginStatus = await LoginService.login(usuario);
      if(loginStatus) {
        navigate("/", { replace: true }); 
      } else {
        alert('usuario ou senha invalidos');
      }

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_container}>
        <h1>Login</h1>

        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.campo_form}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" value={usuario.email} onChange={handleInputChange} required />
          </div>

          <div className={styles.campo_form}> 
            <label htmlFor="password">senha</label>
            <input type="password" name="password" value={usuario.password} onChange={handleInputChange} required />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
