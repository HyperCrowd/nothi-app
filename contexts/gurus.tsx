import React, { Dispatch } from 'react';
import type { IGuruCarousel } from '../state/gurus';
import type { Action } from '.';
import { reducer } from '../reducers/gurus';
import { state } from '../state/gurus';

export interface IGuruContext {
  state: IGuruCarousel;
  dispatch: Dispatch<Action & IGuruCarousel>;
}

const DispatchContext = React.createContext(null);
export const GuruContext = React.createContext<IGuruContext>({
  state,
  dispatch: () => {},
});

export const getDefaultGuruState = () => state;

/**
 * Context Provider
 */
export function GurusProvider({ children }) {
  const [providerState, dispatch] = React.useReducer(reducer, state);

  return (
    <GuruContext.Provider
      value={{
        state: providerState,
        dispatch,
      }}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GuruContext.Provider>
  );
}
