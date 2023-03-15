import * as React from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruCarousel from './GuruCarousel';
import DreamButton from './DreamButton';

const items: IGuruAvatar[] = [
  {
    name: 'Cat Guru',
    image:
      'https://stackblitz.com/files/nothi-app/github/HyperCrowd/nothi-app/main/cat-guru.png',
    description: 'Meow',
  },
  {
    name: 'Omni Guru',
    image:
      'https://stackblitz.com/files/nothi-app/github/HyperCrowd/nothi-app/main/omni-guru.png',
    description: 'The All Buddha',
  },
  {
    name: 'Yoda Guru',
    image:
      'https://stackblitz.com/files/nothi-app/github/HyperCrowd/nothi-app/main/yoda-guru.png',
    description: 'Force it',
  },
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <GuruCarousel items={items} />
      <DreamButton />
    </div>
  );
}
