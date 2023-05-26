import type { IGuruCarousel } from '../state/gurus';
import { GuruActions } from '../actions/gurus';

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
    case GuruActions.SET_AVATAR_INDEX:
      return {
        ...state,
        avatarIndex: action.avatarIndex,
      };

    /**
     *
     */
    case GuruActions.SET_AVATAR_SELECTED:
      return {
        ...state,
        breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
        avatarSelected: action.avatarSelected,
      };

    /**
     *
     */
    case GuruActions.SELECT_CONVERSATION:
      return {
        ...state,
        breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
        conversationIndex: action.conversationIndex,
      };

    /**
     *
     */
    case actions.NAVIGATE_BACK:
      const breadcrumb = [...state.breadcrumb];
      breadcrumb.pop();

      return {
        ...state,
        breadcrumb,
      };

    default:
      return state;
  }
};
