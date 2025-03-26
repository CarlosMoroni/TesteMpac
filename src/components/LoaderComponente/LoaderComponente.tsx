import styles from "./LoaderComponente.module.css"
import { useLoader } from "../../context/LoaderContext"

export default function LoaderComponente() {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
        </div>
    )
}