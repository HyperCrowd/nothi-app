import React from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruAvatar from './GuruAvatar';
import Carousel from 'react-material-ui-carousel';

interface Props {
  avatars: IGuruAvatar[];
  onChange: (index: number) => void;
  onAvatarClick: (index: number) => void;
}

export default function GuruCarousel({
  avatars,
  onChange,
  onAvatarClick,
}: Props) {
  return (
    <Carousel
      swipe={true}
      autoPlay={false}
      indicators={false}
      cycleNavigation={true}
      navButtonsAlwaysInvisible={true}
      fullHeightHover={true}
      animation="slide"
      duration={400}
      onChange={onChange}
    >
      {avatars.map((avatar, i) => (
        <GuruAvatar key={i} avatar={avatar} onClick={onAvatarClick} />
      ))}
    </Carousel>
  );
}
