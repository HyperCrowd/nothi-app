export const GuruActions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
};

/**
 *
 */
export const setAvatarIndex = (avatarIndex: number) => {
  return {
    type: GuruActions.SET_AVATAR_INDEX,
    avatarIndex,
  };
};

/**
 *
 */
export const setAvatarSelected = (avatarSelected: number) => {
  return {
    type: GuruActions.SET_AVATAR_SELECTED,
    avatarSelected,
  };
};

/**
 *
 */
export const selectConversation = (conversationIndex: number) => {
  return {
    type: GuruActions.SELECT_CONVERSATION,
    conversationIndex,
  };
};
