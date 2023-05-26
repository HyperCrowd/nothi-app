import type { GuruContext } from '../contexts/gurus';

export const GuruActions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
};

/**
 *
 */
export const setAvatarIndex = (context: GuruContext, avatarIndex: number) => {
  console.log(context);
  context.dispatch({
    type: GuruActions.SET_AVATAR_INDEX,
    avatarIndex,
  });
};

/**
 *
 */
export const setAvatarSelected = (
  context: GuruContext,
  avatarSelected: number
) => {
  context.dispatch({
    type: GuruActions.SET_AVATAR_SELECTED,
    avatarSelected,
  });
};

/**
 *
 */
export const selectConversation = (
  context: GuruContext,
  conversationIndex: number
) => {
  context.dispatch({
    type: GuruActions.SELECT_CONVERSATION,
    conversationIndex,
  });
};
