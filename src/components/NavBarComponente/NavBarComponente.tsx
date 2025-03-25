import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoAdd, IoListOutline } from "react-icons/io5";
import styles from './NavBarComponente.module.css'

import { LoginService } from "../../services/LoginService";
export default function NavBarComponente() {
    const navigate = useNavigate();

    const logout = () => {
      LoginService.logout()
      navigate("/login", { replace: true }); 
    }

    return(
        <nav className={styles.container_nav}>
            <Link to="/" className={styles.link_style}><img src="/public/icon.svg" alt="logo"/></Link>
            

            <ul>
                <li><Link to="/" className={styles.link_style}><IoListOutline /> Vagas</Link></li>
                <li><Link to="/cadastro-vagas" className={styles.link_style}><IoAdd /> Adicionar vaga</Link></li>
            </ul>

            <button onClick={logout}><IoLogOutOutline /> Sair</button>
        </nav>
    )
}