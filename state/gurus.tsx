import React from 'react';

export interface IConversationMessage {
  from: string;
  to: string;
  createdOn: Date;
  content: string;
}

export interface IConversation {
  id: string;
  title: string;
  messages: IConversationMessage[];
}

export interface IGuruAvatar {
  id: string;
  name: string;
  image: string;
  description: string;
  conversations: IConversation[];
  focused: boolean;
}

export interface IGuruCarousel {
  avatarIndex?: number;
  avatarSelected?: number;
  conversationIndex?: number;
  isRecording?: boolean;
}

/**
 * State
 */
export const state: IGuruCarousel = {
  avatarIndex: 0,
  avatarSelected: -1,
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
            content:
              'so my dream was about hot dogs in leotards, singing the vietnamese national anthem and my girlfriend was next to me and we were flying around on a magic carpet we ordered from Uber.  What dose it mean?',
          },
          {
            to: 'user',
            from: 'cat-guru-01',
            createdOn: new Date(),
            content: `The hot dogs (why aren't cats hot?) in leotards and singing of the Vietnamese national anthem could represent a blending or juxtaposition of different cultural elements or identities within the dreamer's psyche. The flying on a magic carpet ordered from Uber may symbolize a sense of freedom and empowerment, or perhaps a desire to escape from the mundane aspects of everyday life.  Meow.`,
          },
          {
            to: 'cat-guru-01',
            from: 'user',
            createdOn: new Date(),
            content: 'wow thanks cat guru, how can I pay you?',
          },
          {
            to: 'user',
            from: 'cat-guru-01',
            createdOn: new Date(),
            content: 'catnip',
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
            to: 'user',
            from: 'cat-guru-01',
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
            to: 'user',
            from: 'cat-guru-01',
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
            to: 'user',
            from: 'cat-guru-01',
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
            to: 'user',
            from: 'cat-guru-01',
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
