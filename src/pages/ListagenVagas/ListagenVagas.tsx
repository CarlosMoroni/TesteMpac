import { VagasServices } from "../../services/VagasService";

function ListagenVagas() {
    const teste = async () => {
      const vagas = await VagasServices.getAllVagas();
      console.log(vagas);
    }

    return (
        <section>
            <h1>Bem-vindo à Página listagen de vagas!</h1>
            <button type="button" onClick={teste}>teste</button>
        </section>
    );
}

export default ListagenVagas;