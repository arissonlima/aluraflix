import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logotipo da AluraFlix" />
      </Link>
      <Link className={styles.button} to="about">Novo vídeo</Link>
    </header>
  );
}