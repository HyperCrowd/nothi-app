import type { IGuruAvatar } from '../components/GuruAvatar';

export const State = {
  avatarIndex: 0,
  avatarSelected: -1,
  breadcrumb: ['avatarSelectionView'],
};

export const avatars: IGuruAvatar[] = [
  {
    id: 'cat-guru-01',
    name: 'Cat Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/cat-guru.png',
    description: 'Meow',
    notifications: 5,
    focused: true,
  },
  {
    id: 'omni-guru-01',
    name: 'Omni Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/omni-guru.png',
    description: 'The All Buddha',
    notifications: 0,
    focused: false,
  },
  {
    id: 'yoda-guru-01',
    name: 'Yoda Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/yoda-guru.png',
    description: 'Force it',
    notifications: 0,
    focused: false,
  },
];
