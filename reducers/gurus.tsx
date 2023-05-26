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
  switch (action.type) {
    /**
     *
     */
    case GuruActions.SET_AVATAR_INDEX:
      return {
        avatarIndex: action.avatarIndex,
        ...state,
      };

    /**
     *
     */
    case GuruActions.SET_AVATAR_SELECTED:
      return {
        avatarSelected: action.avatarSelected,
        ...state,
      };

    /**
     *
     */
    case GuruActions.SELECT_CONVERSATION:
      return {
        conversationIndex: action.conversationIndex,
        ...state,
      };

    default:
      return state;
  }
};
