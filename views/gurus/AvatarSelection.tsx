import React from 'react';
import GuruCarousel from '../../components/GuruCarousel';
import DreamButton from '../../components/DreamButton';
import { avatars } from '../../state/gurus';
import { useGuruContext } from '../../contexts/gurus';
import { setAvatarIndex, setAvatarSelected } from '../../actions/gurus';
import contextBus from '../../contexts';

interface Props {
  avatarIndex: number;
}

export default function AvatarSelectionView({ avatarIndex }: Props) {
  return (
    <div>
      <GuruCarousel
        avatars={avatars}
        onChange={(index: number) => {
          contextBus.schedule(setAvatarIndex, index);
        }}
        onAvatarClick={(index: number) => {
          contextBus.schedule(setAvatarSelected, index);
        }}
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
