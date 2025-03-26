import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VagasServices } from "../../services/VagasService";
import { Vagas } from "../../models/Vagas";

import styles from "./CadastroVagas.module.css";
import { FaRegTrashCan, FaLeftLong  } from "react-icons/fa6";

function CadastroVagas() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [registro, setRegistro] = useState<Vagas>({
    company: "",
    role: "",
    location: "",
    remote: false,
    link: "",
    salary: 0,
  });

  const deleteVaga = async () => {
    if (id) {
      if (confirm(`Deseja excluir essa vaga de emprego? \n${registro.role}`)) {
        await VagasServices.deleteVaga(+id);
        returnPage();
      }
    } else {
      alert("nenhuma vaga selecionada, a ação foi cancelada!");
    }
  };

  const handleSave = async () => {
    try {
      const payload: Vagas = {
        ...registro,
        remote: registro?.remote ?? false,
      };

      await VagasServices.saveVagas(payload);
      alert(id ? "Vaga atualizada com sucesso!" : "Vaga criada com sucesso!");
      returnPage();
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar a vaga.");
    }
  };

  const returnPage = async () => {
    navigate("/");
  }

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
      }else {
        setRegistro({
          company: "",
          role: "",
          location: "",
          remote: false,
          link: "",
          salary: 0,
        });
      }
    };

    fetchVaga();
  }, [id, navigate]);

  return (
    <section className={styles.container_cadastro}>
      <div className={styles.form_container}>

        <div className={styles.header_container}>
            <button onClick={returnPage}>
                <FaLeftLong size={22} style={{color: "#fff"}}/>
            </button>
            <h1>{id ? "Editar" : "Cadastrar"} vaga</h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div>
            <label htmlFor="role">Função</label>
            <input
              type="text"
              name="role"
              id="role"
              required
              value={registro?.role || ""}
              onChange={(event) =>
                setRegistro({ ...registro, role: event.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              name="company"
              id="company"
              required
              value={registro?.company || ""}
              onChange={(e) =>
                setRegistro({ ...registro, company: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="location">Localidade</label>
            <input
              type="text"
              name="location"
              id="location"
              required
              value={registro?.location || ""}
              onChange={(e) =>
                setRegistro({ ...registro, location: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="remote">Tipo de vaga</label>
            <select
              name="remote"
              id="remote"
              required
              className={styles.select_remote}
              value={registro?.remote?.toString() || ""}
              onChange={(e) =>
                setRegistro({ ...registro, remote: e.target.value === "true" })
              }
            >
              <option value="true">Remoto</option>
              <option value="false">
                Presencial
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="link">Link para candidatura</label>
            <input
              type="text"
              name="link"
              id="link"
              required
              value={registro?.link || ""}
              onChange={(e) =>
                setRegistro({ ...registro, link: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="salary">Salário</label>
            <input
              type="number"
              name="salary"
              id="salary"
              step="1"
              required
              value={registro?.salary ? Math.floor(registro.salary / 100) : ""}
              onChange={(e) => {
                const value = parseInt(e.target.value || "0", 10);
                setRegistro({ ...registro, salary: value * 100 });
              }}
            />
          </div>

          {id && (
            <div>
              <button
                className={styles.delete_button}
                type="button"
                onClick={deleteVaga}
              >
                <FaRegTrashCan />
              </button>
            </div>
          )}

          <button type="submit">salvar</button>
        </form>
      </div>
    </section>
  );
}

export default CadastroVagas;
