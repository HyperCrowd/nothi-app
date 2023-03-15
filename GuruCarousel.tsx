import * as React from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruAvatar from './GuruAvatar';
import Carousel from 'react-material-ui-carousel';

const items: IGuruAvatar[] = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
  {
    name: 'Random Name #3',
    description: 'Bye World!',
  },
];

export default function GuruCarousel() {
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
        <GuruAvatar key={i} item />
      ))}
    </Carousel>
  );
}
