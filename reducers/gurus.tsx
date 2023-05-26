import type { Action } from '../contexts';
import type { IGuruCarousel } from '../state/gurus';
import { GuruActions } from '../actions/gurus';

/**
 * Reducer
 */
export const reducer = (
  state: IGuruCarousel,
  action: Action & IGuruCarousel
): IGuruCarousel => {
  console.log('guru', action);

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
        // @TODO build context queue
        // breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
        avatarSelected: action.avatarSelected,
      };

    /**
     *
     */
    case GuruActions.SELECT_CONVERSATION:
      return {
        ...state,
        // @TODO build context queue
        // breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
        conversationIndex: action.conversationIndex,
      };

    default:
      return state;
  }
};
