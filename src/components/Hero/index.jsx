import TitleCategory from '../../components/TitleCategory';

import styles from './Hero.module.css';
import videoPreview from "../../assets/videocard.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <TitleCategory />
        <h2 className="title-medium">SEO com React</h2>
        <p className="body-medium">
          Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.
        </p>
      </div>
      <div>
        <img src={videoPreview} alt="Preview do vídeo" className={styles.videoPreview} />
      </div>
    </section>
  );
}