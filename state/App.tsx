import type { IGuruAvatar } from '../types';

export const State = {
  avatarIndex: 0,
  avatarSelected: -1,
  breadcrumb: ['avatarSelectionView'],
  conversationIndex: -1,
  isRecording: false,
};

export const avatars: IGuruAvatar[] = [
  {
    id: 'cat-guru-01',
    name: 'Cat Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/cat-guru.png',
    description: 'Meow',
    conversations: [
      {
        id: '01',
        title: 'Introductions',
        messages: [
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'hey ',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'watap ',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'anything new',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'nope, just need catnip',
          },
        ],
      },
      {
        id: '02',
        title: 'Catnip and God',
        messages: [
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'get that catnip ',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'nope',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'the gods shun you',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'i know, am sad :(',
          },
        ],
      },
      {
        id: '03',
        title: 'Shady Dealer',
        messages: [
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'I can sell you catnip',
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: "no way, you're a shady dealer",
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: "no I' not",
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'the spirits tell me so',
          },
        ],
      },
    ],
    focused: true,
  },
  {
    id: 'omni-guru-01',
    name: 'Omni Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/omni-guru.png',
    description: 'The All Buddha',
    conversations: [],
    focused: false,
  },
  {
    id: 'yoda-guru-01',
    name: 'Yoda Guru',
    image:
      'https://raw.githubusercontent.com/HyperCrowd/nothi-app/main/assets/yoda-guru.png',
    description: 'Force it',
    conversations: [],
    focused: false,
  },
];
