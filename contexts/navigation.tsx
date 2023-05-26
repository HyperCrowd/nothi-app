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
  dispatch: undefined,
});

/**
 *
 */
export const useNavigationContext = (): NavigationContext => {
  const [contextState, dispatch] = React.useReducer(reducer, state);

  return {
    state: contextState,
    dispatch,
  };
};

/**
 * Context Provider
 */
export function NavigationProvider({ children }) {
  const context = useNavigationContext();
  // const [providerState, dispatch] = React.useReducer(reducer, state);

  return (
    <Context.Provider value={context}>
      <DispatchContext.Provider value={context.dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
