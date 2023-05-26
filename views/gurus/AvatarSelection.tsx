import React from 'react';
import GuruCarousel from '../../components/GuruCarousel';
import DreamButton from '../../components/DreamButton';
import { avatars } from '../../state/gurus';
import { useGuruContext } from '../../contexts/gurus';
import { setAvatarIndex, setAvatarSelected } from '../../actions/gurus';

interface Props {
  avatarIndex: number;
}

export default function AvatarSelectionView({ avatarIndex }: Props) {
  const context = useGuruContext();

  return (
    <div>
      <GuruCarousel
        avatars={avatars}
        onChange={(index: number) => {
          setAvatarIndex(context, index);
        }}
        onAvatarClick={(index: number) => {
          setAvatarSelected(context, index);
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
