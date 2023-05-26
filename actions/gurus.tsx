import type { Action } from '../contexts/index';
import type { IGuruCarousel } from '../state/gurus';

export const GuruActions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
};

/**
 *
 */
export const setAvatarIndex = (avatarIndex: number): Action & IGuruCarousel => {
  return {
    type: GuruActions.SET_AVATAR_INDEX,
    avatarIndex,
  };
};

/**
 *
 */
export const setAvatarSelected = (
  avatarSelected: number
): Action & IGuruCarousel => {
  return {
    type: GuruActions.SET_AVATAR_SELECTED,
    avatarSelected,
  };
};

/**
 *
 */
export const selectConversation = (
  conversationIndex: number
): Action & IGuruCarousel => {
  return {
    type: GuruActions.SELECT_CONVERSATION,
    conversationIndex,
  };
};
