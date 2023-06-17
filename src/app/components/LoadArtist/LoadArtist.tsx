import { useState } from 'react';
import styles from './loadArtist.module.css';

function LoadArtist() {
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Load the artist and perform any necessary actions
  };

  return (
    <div className={styles.container}>
      <h2>Cargar Artista</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artistName">Nombre del Artista:</label>
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />

        <label htmlFor="songName">Nombre de la Canción:</label>
        <input
          type="text"
          id="songName"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />

        <button type="submit">Cargar</button>
      </form>
    </div>
  );
}

export default LoadArtist;
