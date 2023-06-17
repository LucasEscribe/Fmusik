import { useState } from 'react';
import LoadArtist from '../LoadArtist/LoadArtist';

function ChangeProfileButton() {
  const [showLoadArtist, setShowLoadArtist] = useState(false);

  const handleButtonClick = () => {
    setShowLoadArtist(!showLoadArtist);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Cambiar Perfil</button>
      {showLoadArtist && <LoadArtist />}
    </div>
  );
}

export default ChangeProfileButton;
