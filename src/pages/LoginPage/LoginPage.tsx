import { useState } from "react";
import { Usuario } from "../../models/Usuario";
import { login } from "../../services/LoginService";

function LoginPage() {
  const [usuario, setUsuario] = useState<Usuario>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    login(usuario);
  };

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Usuario</label>
          <input type="text" name="email" value={usuario.email} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="password">senha</label>
          <input type="password" name="password" value={usuario.password} onChange={handleChange} required />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

export default LoginPage;
