import ItemVagaComponent from '../../components/ItemVagaComponente/ItemVagaComponent';
import styles from './ListagenVagas.module.css'

function ListagenVagas() {
    return (
        <section className={styles.container}>
            <h1>Vagas Disponiveis</h1>
            
            <ItemVagaComponent />
        </section>
    );
}

export default ListagenVagas;