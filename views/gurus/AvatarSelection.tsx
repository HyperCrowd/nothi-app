import React, { useContext } from 'react';
import GuruCarousel from '../../components/GuruCarousel';
import DreamButton from '../../components/DreamButton';
import { avatars } from '../../state/gurus';
import { GuruContext } from '../../contexts/gurus';
import { setAvatarIndex, setAvatarSelected } from '../../actions/gurus';
import contextBus from '../../contexts';

export default function AvatarSelectionView() {
  const { state, dispatch } = useContext(GuruContext);
  const { avatarIndex } = state;

  return (
    <div>
      <GuruCarousel
        avatars={avatars}
        onChange={(index: number) => {
          contextBus.schedule(dispatch, setAvatarIndex, index);
        }}
        onAvatarClick={(index: number) => {
          contextBus.schedule(dispatch, setAvatarSelected, index);
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
