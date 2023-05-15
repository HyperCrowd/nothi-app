import { createContext, useReducer } from 'react';
import gurusReducer from '../reducers/gurus';

export const GurusCarouselContext = createContext(null);
export const GurusCarouselDispatchContext = createContext(null);

const state = {
  avatarIndex: 0,
  avatarSelected: -1,
  breadcrumb: ['avatarSelectionView'],
  conversationIndex: -1,
  isRecording: false,
};

const initialTasks = [state];

export function GurusProvider({ children }) {
  const [gurus, dispatch] = useReducer(gurusReducer, initialTasks);

  return (
    <GurusCarouselContext.Provider value={gurus}>
      <GurusCarouselDispatchContext.Provider value={dispatch}>
        {children}
      </GurusCarouselDispatchContext.Provider>
    </GurusCarouselContext.Provider>
  );
}
