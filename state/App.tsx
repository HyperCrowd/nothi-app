import type { IGuruCarousel, SetGuruCarouselState } from './gurus';
import React, { createContext } from 'react';
import { state } from './gurus';

export interface StateType {
  guruCarousel: IGuruCarousel;
}

export const State: StateType = {
  guruCarousel: state,
};

export const Context = createContext(State);
export type SetState = React.Dispatch<React.SetStateAction<StateType>>;
export type ContextType = typeof Context;

/**
 *
 */
export function setAvatarIndex(
  state: IGuruCarousel,
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
  state: IGuruCarousel,
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
  state: IGuruCarousel,
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
  state: IGuruCarousel,
  setState: SetGuruCarouselState
) {
  state.breadcrumb.pop();
  setState({
    ...state,
  });
}
