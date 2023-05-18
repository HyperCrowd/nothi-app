import type { IGuruCarousel, SetGuruCarouselState } from './gurus';
import React, { createContext } from 'react';
import { state } from './gurus';

// @TODO: Gut this and bring in the reducer (whew)

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
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    guruCarousel: {
      avatarIndex: index,
    },
  });
}

/**
 *
 */
export function setAvatarSelected(
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    guruCarousel: {
      breadcrumb: [...state.guruCarousel.breadcrumb, 'avatarConversationsView'],
      avatarSelected: index,
    },
  });
}

/**
 *
 */
export function selectConversation(
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    guruCarousel: {
      breadcrumb: [...state.guruCarousel.breadcrumb, 'avatarConversationView'],
      conversationIndex: index,
    },
  });
}

/**
 *
 */
export function navigateBack(state: StateType, setState: SetState) {
  state.guruCarousel.breadcrumb.pop();
  setState({
    ...state,
  });
}
