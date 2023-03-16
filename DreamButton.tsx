import React, { useState } from 'react';
import type { IGuruAvatar } from './GuruAvatar';

interface Props {
  avatar: IGuruAvatar;
}

export default function DreamButton({ avatar }: Props) {
  const [isRecording, setIsRecording] = useState(false);

  const style = {
    backgroundImage: `url(https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/dream_button_raised.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: isRecording ? 'scale(0.9)' : 'scale(1)',
    opacity: isRecording ? 0.25 : 1,
  };

  return (
    <div className="guruAvatar main-bkg">
      <div
        className="dreamButton"
        style={style}
        onClick={() => {
          setIsRecording(!isRecording);
        }}
      />
    </div>
  );
}
