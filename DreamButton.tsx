import React from 'react';
import type { IGuruAvatar } from './GuruAvatar';

interface Props {
  avatar: IGuruAvatar;
}

export default function DreamButton({ avatar }: Props) {
  const style = {
    backgroundImage: `url(https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/dream_button_raised.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="guruAvatar main-bkg">
      <div className="guruAvatarImage" style={style} />
    </div>
  );
}
