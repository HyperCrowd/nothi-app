import React from 'react';
import { Badge } from '@mui/material';
import type { IGuruAvatar } from '../types';

interface Props {
  index?: number;
  avatar?: IGuruAvatar;
  width?: number;
  height?: number;
  text?: string;
  showBadge: boolean;
  canClick: boolean;
  selectAvatarClick?: (index: number) => void;
}

export default function GuruAvatar({
  index,
  avatar,
  selectAvatarClick,
  width = 256,
  height = 256,
  text,
  showBadge = true,
  canClick = true,
}: Props) {
  let style = {
    width: width + 'px',
    height: height + 'px',
    backgroundImage: undefined,
    backgroundPosition: undefined,
    backgroundSize: undefined,
    backgroundRepeat: undefined,
  };

  const size = {
    width: width + 'px',
    height: height + 'px',
    lineHeight: height + 'px',
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

  const avatarImage =
    text === undefined ? (
      <div
        className="guruAvatarImage shadow"
        style={style}
        onClick={onAvatarClick}
      />
    ) : (
      <div
        className="guruAvatarImage shadow"
        style={size}
        onClick={onAvatarClick}
      >
        {text}
      </div>
    );

  const badge =
    showBadge === true ? (
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color="secondary"
        badgeContent={avatar.conversations.length}
      >
        {avatarImage}
      </Badge>
    ) : (
      <></>
    );

  const result = (
    <div
      style={avatar === undefined ? size : {}}
      className={avatar === undefined ? 'guruAvatar' : 'guruAvatar main-bkg'}
    >
      {badge}
    </div>
  );
  return result;
}
