import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VagasServices } from "../../services/VagasService";
import { Vagas } from "../../models/Vagas";

import styled from "./VisualizarVaga.module.css";
import { FaLeftLong } from "react-icons/fa6";

function VisualizarVaga() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [registro, setRegistro] = useState<Vagas>({
    company: "",
    role: "",
    location: "",
    remote: false,
    link: "",
    salary: 0,
  });

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


  const returnPage = async () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchVaga = async () => {
      if (id) {
        try {
          const responseApi = await VagasServices.getByIdVagas(+id);
          setRegistro(responseApi);
        } catch (error) {
          console.error("Erro ao buscar vaga:", error);
          alert("Vaga não encontrada, operação cancelada.");
          navigate("/");
        }
      } else {
        alert("Vaga não Informada, operação cancelada.");
        navigate("/");
      }
    };

    fetchVaga();
  }, [id, navigate]);

  return (
    <section className={styled.view_container}>
      <div className={styled.container}>
        <div className={styled.header_container}>
          <button onClick={returnPage}>
            <FaLeftLong size={22} style={{ color: "#fff" }} />
          </button>

          <h1>{registro.role}</h1>
        </div>

        <p>Empresa: {registro.company}</p>
        <p>Local: {registro.location}</p>
        <p>Tipo de Vaga: {registro.remote ? "Remoto" : "Presencial"}</p>
        <p>
          Salario:{" "}
          {convertSalario(registro.salary)}
        </p>
        
        <a href={registro.link} target="_blank">Candidatar-se</a>
      </div>
    </section>
  );
}

export default VisualizarVaga;
