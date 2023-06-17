import { useState } from 'react';
import styles from './artist.module.css';

interface ArtistProps {
  img: string;
  name: string;
  song: string;
  views: number;
  isFav?: boolean;
}

function Artist(props: ArtistProps) {
  const [views, setViews] = useState(props.views);
  const [isFav, setIsFav] = useState(props.isFav);

  function handlePlay() {
    setViews(views + 1);
  }

  function handleFavorite() {
    setIsFav(!isFav);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={props.img} alt={props.name} className={styles.img} />
      </div>
      <h2 className={styles.artist}>{props.name}</h2>
      <p className={styles.song}>{props.song}</p>
      <p className={styles.views}>{views}</p>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={handlePlay} className={styles.playButton}>
          Play
        </button>
        <button
          type="button"
          className={`${styles.favorite} ${isFav ? styles.favActive : styles.favInactive}`}
          onClick={handleFavorite}
        >
          <span role="img" aria-label="Favorite">
            ❤️
          </span>
        </button>
      </div>
    </div>
  );
}

export default Artist;
