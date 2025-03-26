import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoAdd, IoListOutline, IoMenu } from "react-icons/io5";
import styles from "./NavBarComponente.module.css";
import logo from '/public/icon.svg'

import { LoginService } from "../../services/LoginService";
import { useState } from "react";

export default function NavBarComponente() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAberto, setMenuAberto] = useState(true);

  const logout = () => {
    LoginService.logout();
    setMenuAberto(!menuAberto)
    navigate("/login", { replace: true });
  };

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.container_nav}>

        <Link to="/" className={styles.link_style}>
          <img src={logo} alt="logo" />
        </Link>

        <button
          className={styles.menu_botao}
          onClick={() => setMenuAberto(!menuAberto)}
          type="button"
        >
          <IoMenu size={40} />
        </button>

        <ul
          className={`${styles.menu} ${!menuAberto ? styles.menu_aberto : ""}`}
        >
          <li>
            <Link
              to="/"
              className={styles.link_style}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <IoListOutline /> Vagas
            </Link>
          </li>
          <li>
            <Link
              to="/cadastro-vagas"
              className={styles.link_style}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <IoAdd /> Adicionar vaga
            </Link>
          </li>
          <li>
            <button onClick={logout} className={styles.logout_btn} type="button">
              <IoLogOutOutline /> Sair
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
