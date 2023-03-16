import React from 'react';

export interface IGuruAvatar {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Props {
  avatar: IGuruAvatar;
}

export default function GuruAvatar({ avatar }: Props) {
  const style = {
    backgroundImage: `url(${avatar.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="guruAvatar main-bkg">
      <div className="guruAvatarImage shadow" style={style} />
    </div>
  );
}
