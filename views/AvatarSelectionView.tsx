import React from 'react';
import GuruCarousel from '../components/GuruCarousel';
import DreamButton from '../components/DreamButton';
import { avatars } from '../state/App';

interface Props {
  setAvatarIndex: (index: number) => void;
  setAvatarSelected: (index: number) => void;
  avatarIndex: number;
}

export default function AvatarSelectionView({
  setAvatarIndex,
  setAvatarSelected,
  avatarIndex,
}: Props) {
  return (
    <div>
      <GuruCarousel
        avatars={avatars}
        onChange={setAvatarIndex}
        onAvatarClick={setAvatarSelected}
        currentAvatarIndex={avatarIndex}
      />
      <DreamButton avatar={avatars[avatarIndex]} />
      <div className="dream-instructions">
        <p>Press to speak to the</p>
        <p>{avatars[avatarIndex].name}</p>
      </div>
    </div>
  );
}
