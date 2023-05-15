import React from 'react';
import gurusReducer from '../reducers/gurus';
import type { StateType } from './state/App';

export const GurusCarouselContext = React.createContext(null);
export const GurusCarouselDispatchContext = React.createContext(null);

const state: StateType = {
  avatarIndex: 0,
  avatarSelected: -1,
  breadcrumb: ['avatarSelectionView'],
  conversationIndex: -1,
  isRecording: false,
};

const initialTasks: State[] = [state];

export function GurusProvider({ children }) {
  const [gurus, dispatch] = React.useReducer(gurusReducer, initialTasks);

  return (
    <GurusCarouselContext.Provider value={gurus}>
      <GurusCarouselDispatchContext.Provider value={dispatch}>
        {children}
      </GurusCarouselDispatchContext.Provider>
    </GurusCarouselContext.Provider>
  );
}
