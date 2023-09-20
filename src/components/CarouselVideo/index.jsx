import VideoCard from '../../components/VideoCard';

import styles from './CarouselVideo.module.css';

export default function CarouselVideo({nome, cor, title }) {

  return (
    <section className={styles.container}>
      <div className={title ? styles.category : styles.noshow}>
        <h3 style={{ backgroundColor: cor }}>{nome}</h3>
        <span>{`Formação ${nome} na Alura`}</span>
      </div>
      <div className={styles.videos}>
        <VideoCard cor={cor} />
        <VideoCard cor={cor} />
        <VideoCard cor={cor} />
      </div>
    </section>
  );
}