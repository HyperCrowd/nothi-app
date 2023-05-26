export const GuruActions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
};

const context = 'gurus';

/**
 *
 */
export const setAvatarIndex = (avatarIndex: number) => {
  return {
    type: GuruActions.SET_AVATAR_INDEX,
    context,
    avatarIndex,
  };
};

/**
 *
 */
export const setAvatarSelected = (avatarSelected: number) => {
  return {
    type: GuruActions.SET_AVATAR_SELECTED,
    context,
    avatarSelected,
  };
};

/**
 *
 */
export const selectConversation = (conversationIndex: number) => {
  return {
    type: GuruActions.SELECT_CONVERSATION,
    context,
    conversationIndex,
  };
};
