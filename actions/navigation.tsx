import type { Action } from '../contexts/index';
import type { INavigation } from '../state/navigation';

export const NavigationActions: { [key: string]: string } = {
  TO: 'NAVIGATE_TO',
  BACK: 'NAVIGATE_BACK',
  REFRESH: 'NAVIGATE_REFRESH',
};

/**
 *
 */
export const navigateBack = (): Action & INavigation => {
  return {
    type: NavigationActions.BACK,
  };
};

/**
 *
 */
export const navigateTo = (view: string): Action & INavigation => {
  return {
    type: NavigationActions.TO,
    view,
  };
};

/**
 *
 */
export const refresh = (): Action & INavigation => {
  return {
    type: NavigationActions.REFFESH,
  };
};
