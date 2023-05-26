import React, { useContext, Dispatch } from 'react';
import type { INavigation } from '../state/navigation';
import type { Action } from '.';
import { reducer } from '../reducers/navigation';
import { state } from '../state/navigation';

export interface NavigationContext {
  state: INavigation;
  dispatch: Dispatch<Action & INavigation>;
}

const DispatchContext = React.createContext(null);
const Context = React.createContext<NavigationContext>({
  state,
  dispatch: () => {},
});

/**
 * Context Provider
 */
export function NavigationProvider({ children }) {
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
