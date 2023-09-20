import videoCardImage from '../../assets/videocard1.png';
import styles from './Video.module.css';

export default function VideoCard({ cor }) {
  return (
    <img className={styles.VideoCard} style={{ borderColor: cor}} src={videoCardImage} />
  );
}