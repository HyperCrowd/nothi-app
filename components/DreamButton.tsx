import React, { useState } from 'react';
import type { IGuruAvatar } from '../types';

interface Props {
  avatar: IGuruAvatar;
}

export default function DreamButton({ avatar }: Props) {
  const [isRecording, setIsRecording] = useState(false);

  const style = {
    backgroundImage: `url(https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/dream-button.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: isRecording ? 'scale(0.9)' : 'scale(1)',
    opacity: isRecording ? 0.25 : 1,
  };

  return (
    <div className="guruAvatar main-bkg">
      <div
        className="dreamButton shadow"
        style={style}
        onMouseDown={() => {
          setIsRecording(!isRecording);
        }}
      />
    </div>
  );
}
