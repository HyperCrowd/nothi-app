import React from 'react';
import gurusReducer from '../reducers/gurus';
import type { StateType } from '../state/App';
import { State } from '../state/App';

export const GurusCarouselContext = React.createContext(null);
export const GurusCarouselDispatchContext = React.createContext(null);

const initialTasks: StateType[] = [state.guruCarousel];

export function GurusProvider({ children }) {
  const [gurus, dispatch] = React.useReducer(gurusReducer, State.guruCarousel);

  return (
    <GurusCarouselContext.Provider value={gurus}>
      <GurusCarouselDispatchContext.Provider value={dispatch}>
        {children}
      </GurusCarouselDispatchContext.Provider>
    </GurusCarouselContext.Provider>
  );
}
