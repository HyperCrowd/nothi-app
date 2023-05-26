import { useGuruContext } from '../contexts/gurus';

export const GuruActions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
  NAVIGATE_BACK: 'NAVIGATE_BACK',
};

/**
 *
 */
export const setAvatarIndex = (avatarIndex: number) => {
  const context = useGuruContext();

  context.dispatch({
    type: GuruActions.SET_AVATAR_INDEX,
    avatarIndex,
  });
};

/**
 *
 */
export const setAvatarSelected = (avatarSelected: number) => {
  const context = useGuruContext();

  context.dispatch({
    type: GuruActions.SET_AVATAR_SELECTED,
    avatarSelected,
  });
};

/**
 *
 */
export const selectConversation = (conversationIndex: number) => {
  const context = useGuruContext();

  context.dispatch({
    type: GuruActions.SELECT_CONVERSATION,
    conversationIndex,
  });
};

/**
 *
 */
export const navigateBack = () => {
  const context = useGuruContext();

  context.dispatch({
    type: GuruActions.NAVIGATE_BACK,
  });
};
