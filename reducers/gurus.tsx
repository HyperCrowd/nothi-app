import type { IGuruCarousel } from '../state/gurus';

export const actions: { [key: string]: string } = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
  NAVIGATE_BACK: 'NAVIGATE_BACK',
};

/**
 * Reducer
 */
export const reducer = (
  state: IGuruCarousel,
  action: { type: string } & IGuruCarousel
): IGuruCarousel => {
  switch (action.type) {
    /**
     *
     */
    case actions.SET_AVATAR_INDEX:
      return {
        ...state,
        avatarIndex: action.avatarIndex,
      };

    /**
     *
     */
    case actions.SET_AVATAR_SELECTED:
      return {
        ...state,
        breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
        avatarSelected: action.avatarSelected,
      };

    /**
     *
     */
    case actions.SELECT_CONVERSATION:
      return {
        ...state,
        breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
        conversationIndex: action.conversationIndex,
      };

    /**
     *
     */
    case actions.NAVIGATE_BACK:
      const breadcrumb = [...action.breadcrumb];
      breadcrumb.pop();

      return {
        ...state,
        breadcrumb,
      };

    default:
      return state;
  }
};
