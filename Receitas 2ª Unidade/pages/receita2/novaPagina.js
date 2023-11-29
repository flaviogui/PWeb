import { Imagem, Prea, Descricao } from "./sobre";
import styles from './styles.module.css';


export default function Principal(){
    return (
       <div className={styles.container}>
          <h1>A super Maquina</h1>
          <Imagem/>
          <Descricao/>
          <Culpado nome = "Maria Prea"/>
          <Prea/>
          <MariaPrea nome = "Prea" />
       </div>
    )
 }

 export function MariaPrea({nome}){
   return(
       <h2>{`Morreu Maria ${nome}...`}</h2>
   )
}

export function Culpado({nome}){
   return(
   <h2>{`A super maquina atropelou ${nome}...`}</h2>
   )
}
 
 