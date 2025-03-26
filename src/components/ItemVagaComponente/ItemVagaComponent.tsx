import { Link } from "react-router-dom";
import { Vagas } from "../../models/Vagas";
import styles from "./ItemVagaComponent.module.css";
import { MdEdit } from "react-icons/md";

export default function ItemVagaComponent({ objVaga }: { objVaga: Vagas }) {
  const convertSalario = (valor: number) => {
    if (!valor) {
      return 0;
    }

    valor = valor / 100;
    const valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  };

  const transformRemote = (remote: boolean) => {
    const formateRemote = remote ? "Remoto" : "Presencial";
    return formateRemote;
  };

  return (
    <div className={styles.container}>
      <span className={styles.role}>{objVaga.role}</span>
      <span className={styles.company}>{objVaga.company}</span>
      <span className={styles.remote}>
        tipo de vaga: {transformRemote(objVaga.remote)}
      </span>

      <div className={styles.container_sub}>
        <div className={styles.div_salary_location}>
          <span className={styles.location}>{objVaga.location}</span>
          <span className={styles.salary}>
            {convertSalario(objVaga.salary)}{" "}
          </span>
        </div>

        <Link to={`/visualizar-vaga/${objVaga.id}`}>
          <button className={styles.link}>
            Visualizar
          </button>
        </Link>
      </div>
      
      <Link to={`/cadastro-vagas/${objVaga.id}`}>
        <MdEdit style={{position: "absolute", top: "10px", right: "10px", color: "#000"}} size={20}/>
      </Link>
    </div>
  );
}
