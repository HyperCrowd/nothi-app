import React, { useContext, Dispatch } from 'react';
import type { IGuruCarousel } from '../state/gurus';
import { reducer } from '../reducers/gurus';
import { state } from '../state/gurus';

const Context = React.createContext(null);
const DispatchContext = React.createContext(null);

interface GuruContext {
  state: IGuruCarousel;
  dispatch: Dispatch<{ type: string } & IGuruCarousel>;
}

/**
 *
 */
export const useGuruContext = (): GuruContext => {
  const context = useContext<GuruContext>(Context);
  return context;
};

/**
 * Context Provider
 */
export function GurusProvider({ children }) {
  const [providerState, dispatch] = React.useReducer(
    reducer,
    state,
    (initialState) => initialState
  );

  return (
    <Context.Provider value={providerState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
