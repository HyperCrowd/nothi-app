import React from 'react';
import { Badge } from '@mui/material';
import type { IGuruAvatar } from '../types';

interface Props {
  index?: number;
  avatar?: IGuruAvatar;
  width?: number;
  height?: number;
  text?: string;
  showBadge?: boolean;
  canClick?: boolean;
  selectAvatarClick?: (index: number) => void;
}

export default function GuruAvatar({
  index,
  avatar,
  selectAvatarClick,
  width = 256,
  height = 256,
  text = '',
  showBadge = true,
  canClick = true,
}: Props) {
  const size = {
    width: width + 'px',
    height: height + 'px',
    lineHeight: height + 'px',
  };

  let style = {
    ...size,
    backgroundImage: undefined,
    backgroundPosition: undefined,
    backgroundSize: undefined,
    backgroundRepeat: undefined,
  };

  if (avatar !== undefined) {
    style = {
      ...style,
      backgroundImage: `url(${avatar.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
  }

  const onAvatarClick = () => {
    if (canClick) {
      selectAvatarClick(index);
    }
  };

  const avatarImage = (
    <div
      className="guruAvatarImage shadow"
      style={style}
      onClick={onAvatarClick}
    >
      {text}
    </div>
  );

  console.log(size);
  const result = (
    <div className={text === '' ? 'guruAvatar' : 'guruAvatar main-bkg'}>
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color="secondary"
        badgeContent={showBadge === true ? avatar.conversations.length : 0}
      >
        {avatarImage}
      </Badge>
    </div>
  );
  return result;
}
