import styles from './Footer.module.css';

import logo from '../../assets/logo.png';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <img src={logo} alt="Logotipo da AluraFlix" />
    </footer>
  );
}         