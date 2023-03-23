import React from 'react';
import { Badge } from '@mui/material';

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
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color="secondary"
        badgeContent={10}
      >
        <div className="guruAvatarImage shadow" style={style} />
      </Badge>
    </div>
  );
}
