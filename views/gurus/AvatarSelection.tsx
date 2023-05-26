import React from 'react';
import GuruCarousel from '../../components/GuruCarousel';
import DreamButton from '../../components/DreamButton';
import { avatars } from '../../state/gurus';

interface Props {
  setAvatarIndex: (index: number) => void;
  setAvatarSelected: (index: number) => void;
  avatarIndex: number;
}

function AvatarSelection({
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

export const AvatarSelection = (
  state: IGuruCarousel,
  dispatch: Dispatch<Action & IGuruCarousel>
) => {
  return (
    <AvatarConversations
      setAvatarIndex={setAvatarIndex}
      setAvatarSelected={setAvatarSelected}
      avatarIndex={state.avatarIndex}
    />
  );
};