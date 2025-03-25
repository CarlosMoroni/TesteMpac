import { useState } from "react";
import { Usuario } from "../../models/Usuario";
import { login } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";

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
    login(usuario);
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Usuario</label>
          <input type="text" name="email" value={usuario.email} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="password">senha</label>
          <input type="password" name="password" value={usuario.password} onChange={handleInputChange} required />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

export default LoginPage;
