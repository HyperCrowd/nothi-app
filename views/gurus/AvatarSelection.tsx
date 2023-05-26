import React from 'react';
import GuruCarousel from '../../components/GuruCarousel';
import DreamButton from '../../components/DreamButton';
import { avatars } from '../../state/gurus';
import { setAvatarIndex, setAvatarSelected } from '../../actions/gurus';

interface Props {
  avatarIndex: number;
}

export default function AvatarSelectionView({ avatarIndex }: Props) {
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
