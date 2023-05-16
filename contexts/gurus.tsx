import React from 'react';
import gurusReducer from '../reducers/gurus';
import { State } from '../state/App';

export const GurusCarouselContext = React.createContext(null);
export const GurusCarouselDispatchContext = React.createContext(null);

export function GurusProvider({ children }) {
  const [guruCarousel, dispatch] = React.useReducer(
    gurusReducer,
    State.guruCarousel,
    (initialState) => initialState
  );

  return (
    <GurusCarouselContext.Provider value={guruCarousel}>
      <GurusCarouselDispatchContext.Provider value={dispatch}>
        {children}
      </GurusCarouselDispatchContext.Provider>
    </GurusCarouselContext.Provider>
  );
}
