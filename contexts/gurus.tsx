import React from 'react';
import { reducer } from '../reducers/gurus';
import { state } from '../state/gurus';

const Context = React.createContext(null);
const DispatchContext = React.createContext(null);

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
