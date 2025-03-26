import { useEffect, useState } from "react";
import ItemVagaComponent from "../../components/ItemVagaComponente/ItemVagaComponent";
import { VagasServices } from "../../services/VagasService";
import { Vagas } from "../../models/Vagas";

import styles from "./ListagenVagas.module.css";

function ListagenVagas() {
  const [registros, setRegistros] = useState<Vagas[]>([]);

  const get = async () => {
    const responseApi = await VagasServices.getAllVagas();
    setRegistros(responseApi);
  };

  useEffect(() => {
    get();
  }, [])

  return (
    <section className={styles.container}>
      <h1>Vagas Disponiveis</h1>

      <div className={styles.containe_itens}>
        {registros.map((item) => (
          <ItemVagaComponent key={item.id} objVaga={item} />
        ))}
      </div>
    </section>
  );
}

export default ListagenVagas;
