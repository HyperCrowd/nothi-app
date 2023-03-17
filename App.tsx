import React, { useState } from 'react';
import GuruCarousel from './components/GuruCarousel';
import DreamButton from './components/DreamButton';
import { avatars } from './state/App';

export default function App() {
  const [avatarIndex, setAvatarIndex] = useState(0);

  return (
    <div>
      <GuruCarousel avatars={avatars} onChange={setAvatarIndex} />
      <DreamButton avatar={avatars[avatarIndex]} />
      <div className="dream-instructions">
        <p>Press to speak to the</p>
        <p>{avatars[avatarIndex].name}</p>
      </div>
    </div>
  );
}
