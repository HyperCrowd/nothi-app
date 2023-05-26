import React, { useContext, Dispatch } from 'react';
import type { INavigation } from '../state/navigation';
import type { Action } from '.';
import { reducer } from '../reducers/navigation';
import { state } from '../state/navigation';

export interface INavigationContext {
  state: INavigation;
  dispatch: Dispatch<Action & INavigation>;
}

const DispatchContext = React.createContext(null);
export const NavigationContext = React.createContext<INavigationContext>({
  state,
  dispatch: () => {},
});

/**
 * Context Provider
 */
export function NavigationProvider({ children }) {
  const [providerState, dispatch] = React.useReducer(reducer, state);

  return (
    <NavigationContext.Provider
      value={{
        state: providerState,
        dispatch,
      }}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </NavigationContext.Provider>
  );
}
