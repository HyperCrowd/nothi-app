import React from 'react';
import { Badge } from '@mui/material';

export interface IGuruAvatar {
  id: string;
  name: string;
  image: string;
  description: string;
  notifications: number;
  focused: boolean;
}

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
        badgeContent={avatar.notifications}
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
