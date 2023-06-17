import { useState } from 'react';
import Home from './screens/Home/Home';
import LoadArtist from './components/LoadArtist/LoadArtist';
import '../global.css';

function App() {
  const [isArtistProfile] = useState(false);


  return (
    <div className="container">
      <aside className="left-sidebar">
        <main>
          {isArtistProfile ? <LoadArtist /> : <div>Componente Listas Reproducción</div>}
        </main>
      </aside>
      <main className="center">
        <div className="main-content">
          <Home isArtistProfile={isArtistProfile} />
        </div>
      </main>
    </div>
  );
}

export default App;
