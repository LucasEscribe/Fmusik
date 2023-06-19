// fmusy2k\src\app\index.tsx

import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Center from './components/Center/Center';
import LoadArtist from './components/LoadArtist/LoadArtist';
import TopMenu from './components/TopMenu/TopMenu';
import styles from './index.module.css';

function App() {
  const [isArtistProfile, setIsArtistProfile] = useState(false);

  const handleToggleProfile = () => {
    setIsArtistProfile(!isArtistProfile);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.leftSidebar}>
        <main className={styles.leftSidebarContent}>
          <TopMenu />
          <button className={styles.changeProfileButton} onClick={handleToggleProfile}>
            Cambiar Perfil
          </button>
          {isArtistProfile && <LoadArtist />}
        </main>
      </aside>
      <main className={styles.center}>
        <div className={styles.mainContent}>
          <Center />
        </div>
      </main>
    </div>
  );
}

export default App;