import React from 'react';
import { Badge } from '@mui/material';
import type { IGuruAvatar } from '../types';

interface Props {
  index: number;
  avatar: IGuruAvatar;
  selectAvatarClick: (index: number) => void;
}

export default function GuruAvatar({
  index,
  avatar,
  selectAvatarClick,
}: Props) {
  const style = {
    backgroundImage: `url(${avatar.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const onAvatarClick = () => {
    console.log(index);
    selectAvatarClick(index);
  };

  return (
    <div className="guruAvatar main-bkg">
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color="secondary"
        badgeContent={avatar.conversations.length}
      >
        <div
          className="guruAvatarImage shadow"
          style={style}
          onClick={onAvatarClick}
        />
      </Badge>
    </div>
  );
}
