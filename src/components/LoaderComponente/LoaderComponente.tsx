import styles from "./LoaderComponente.module.css"

export default function LoaderComponente() {
    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
        </div>
    )
}