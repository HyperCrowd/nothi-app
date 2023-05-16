import React from 'react';
import { reducer } from '../reducers/gurus';
import { guruCarousel } from '../state/gurus';

const Context = React.createContext(null);
const DispatchContext = React.createContext(null);

export function GurusProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    reducer,
    guruCarousel,
    (initialState) => initialState
  );

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
