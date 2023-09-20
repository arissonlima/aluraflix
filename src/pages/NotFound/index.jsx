import styles from './NotFound.module.css';

import iconAlert from '../../assets/icon_alert.png';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return(
    <div className={styles.container}>
      <img src={iconAlert} alt="Ícone de alerta" />
      <h2>A página que está tentando acessar não existe!</h2>
      <Link to="/" className={styles.link}>Voltar pra Home</Link>
    </div>
  );
}