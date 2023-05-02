import { createContext, useReducer } from 'react';
import gurusReducer from '../reducers/gurus';

export const GurusContext = createContext(null);
export const GurusDispatchContext = createContext(null);

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
    <GuruCarouselContext.Provider value={gurus}>
      <GuruCarouselDispatchContext.Provider value={dispatch}>
        {children}
      </GuruCarouselDispatchContext.Provider>
    </GuruCarouselContext.Provider>
  );
}
