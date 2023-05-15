import type { IGuruAvatar } from '../types';

import React from 'react';
import GuruAvatar from './GuruAvatar';
import Carousel from 'react-material-ui-carousel';

interface Props {
  avatars: IGuruAvatar[];
  currentAvatarIndex: number;
  onChange: (index: number) => void;
  onAvatarClick: (index: number) => void;
}

export default function GuruCarousel({
  avatars,
  currentAvatarIndex,
  onChange,
  onAvatarClick,
}: Props) {
  return (
    <Carousel
      swipe={true}
      autoPlay={false}
      indicators={false}
      index={currentAvatarIndex}
      cycleNavigation={true}
      navButtonsAlwaysInvisible={true}
      fullHeightHover={true}
      animation="slide"
      duration={400}
      onChange={onChange}
    >
      {avatars.map((avatar, i) => (
        <GuruAvatar
          key={i}
          index={i}
          avatar={avatar}
          selectAvatarClick={onAvatarClick}
        />
      ))}
    </Carousel>
  );
}
