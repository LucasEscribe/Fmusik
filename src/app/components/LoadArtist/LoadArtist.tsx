import { useState } from 'react';
import styles from './loadArtist.module.css';

function LoadArtist() {
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Load the artist and perform any necessary actions
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setImageFile(file);
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

        <label htmlFor="imageFile">Seleccionar imagen:</label>
        <input
          type="file"
          id="imageFile"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit">Cargar</button>
      </form>
    </div>
  );
}

export default LoadArtist;
