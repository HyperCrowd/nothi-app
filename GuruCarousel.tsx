import * as React from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruAvatar from './GuruAvatar';
import Carousel from 'react-material-ui-carousel';

interface Props {
  items: IGuruAvatar[]
}

export default function GuruCarousel({ items }: Props) {
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
    >
      {items.map((item, i) => (
        <GuruAvatar key={i} item={item} />
      ))}
    </Carousel>
  );
}
