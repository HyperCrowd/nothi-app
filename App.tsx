import React, { useState } from 'react';
import type { IGuruAvatar } from './GuruAvatar';
import GuruCarousel from './GuruCarousel';
import DreamButton from './DreamButton';

const avatars: IGuruAvatar[] = [
  {
    id: 'cat-guru-01',
    name: 'Cat Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/cat-guru.png',
    description: 'Meow',
  },
  {
    id: 'omni-guru-01',
    name: 'Omni Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/omni-guru.png',
    description: 'The All Buddha',
  },
  {
    id: 'yoda-guru-01',
    name: 'Yoda Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/yoda-guru.png',
    description: 'Force it',
  },
];

export default function App() {
  const [avatarIndex, setAvatarIndex] = useState(0);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <GuruCarousel avatars={avatars} onChange={setAvatarIndex} />
      <DreamButton avatar={avatars[avatarIndex]} />
    </div>
  );
}
