import { Descricao } from "./descricao";
import { Imagem } from "./imagem";
import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>A SUPER MAQUINA</h2>
            <Descricao />
            <Imagem />
        </div>
    );
}