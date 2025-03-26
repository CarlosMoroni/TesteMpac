import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoAdd, IoListOutline } from "react-icons/io5";
import styles from "./NavBarComponente.module.css";

import { LoginService } from "../../services/LoginService";

export default function NavBarComponente() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    LoginService.logout();
    navigate("/login", { replace: true });
  };

  if(location.pathname === "/login") {
    return null;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.container_nav}>
        <Link to="/" className={styles.link_style}>
          <img src="/public/icon.svg" alt="logo" />
        </Link>

        <ul>
          <li>
            <Link to="/" className={styles.link_style}>
              <IoListOutline /> Vagas
            </Link>
          </li>
          <li>
            <Link to="/cadastro-vagas" className={styles.link_style}>
              <IoAdd /> Adicionar vaga
            </Link>
          </li>
        </ul>

        <button onClick={logout}>
          <IoLogOutOutline /> Sair
        </button>
      </nav>
    </div>
  );
}
