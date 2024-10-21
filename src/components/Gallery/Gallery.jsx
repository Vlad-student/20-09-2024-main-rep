import Picture from '../Picture/Picture';
import arrayPics from './data';
import styles from './Gallery.module.css';

const Gallery = () => {
  const showPicture = (pic) => (
    <Picture key={pic.id} src={pic.src} alt={pic.alt} />
  );
  return (
    <section className={styles.container}>{arrayPics.map(showPicture)}</section>
  );
};

export default Gallery;
