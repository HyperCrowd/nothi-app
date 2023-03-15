import * as React from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruCarousel from './GuruCarousel';

const items: IGuruAvatar[] = [
  {
    name: 'Cat Guru',
    image:
      'https://stackblitz.com/files/nothi-app/github/HyperCrowd/nothi-app/main/cat-guru.png',
    description: 'Meow',
  },
  {
    name: 'Dream Guru',
    image:
      'https://stackblitz.com/files/nothi-app/github/HyperCrowd/nothi-app/main/dream-guru.png',
    description: 'Sashimis and Bowling Balls',
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
    </div>
  );
}
