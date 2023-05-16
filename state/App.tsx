import type { GuruCarousel, SetGuruCarouselState } from './gurus';
import React, { createContext } from 'react';
import { guruCarousel, GuruCarouselContext } from './gurus';

export interface StateType {
  guruCarousel: GuruCarousel;
}

export const State: StateType = {
  guruCarousel,
};

export const Context = createContext(State);
export type SetState = React.Dispatch<React.SetStateAction<StateType>>;
export type ContextType = typeof Context;

/**
 *
 */
export function setAvatarIndex(
  state: GuruCarousel,
  setState: SetGuruCarouselState,
  index: number
) {
  setState({
    ...state,
    avatarIndex: index,
  });
}

/**
 *
 */
export function setAvatarSelected(
  state: GuruCarousel,
  setState: SetGuruCarouselState,
  index: number
) {
  setState({
    ...state,
    breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
    avatarSelected: index,
  });
}

/**
 *
 */
export function selectConversation(
  state: GuruCarousel,
  setState: SetGuruCarouselState,
  index: number
) {
  setState({
    ...state,
    breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
    conversationIndex: index,
  });
}

/**
 *
 */
export function navigateBack(
  state: GuruCarousel,
  setState: SetGuruCarouselState
) {
  state.breadcrumb.pop();
  setState({
    ...state,
  });
}
