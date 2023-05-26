import React, { useContext, Dispatch } from 'react';
import type { IGuruCarousel } from '../state/gurus';
import type { Action } from '.';
import { reducer } from '../reducers/gurus';
import { state } from '../state/gurus';

export interface GuruContext {
  state: IGuruCarousel;
  dispatch: Dispatch<Action & IGuruCarousel>;
}

const DispatchContext = React.createContext(null);
const Context = React.createContext<GuruContext | undefined>(undefined);

/**
 *
 */
export const useGuruContext = (): GuruContext => {
  const context = useContext<GuruContext>(Context);

  return context === undefined
    ? {
        state,
      }
    : context;
};

/**
 * Context Provider
 */
export function GurusProvider({ children }) {
  const [providerState, dispatch] = React.useReducer(reducer, state);

  return (
    <Context.Provider
      value={{
        state: providerState,
        dispatch,
      }}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
