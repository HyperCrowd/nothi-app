import type { Action } from '../contexts';
import type { INavigation } from '../state/navigation';
import { NavigationActions } from '../actions/navigation';

/**
 * Reducer
 */
export const reducer = (
  state: INavigation,
  action: Action & INavigation
): INavigation => {
  switch (action.type) {
    /**
     *
     */
    case NavigationActions.NAVIGATE_BACK:
      const breadcrumb = [...state.breadcrumb];
      breadcrumb.pop();

      return {
        ...state,
        breadcrumb,
      };

    /**
     *
     */
    case NavigationActions.NAVIGATE_TO:
      return {
        breadcrumb: [...state.breadcrumb, action.view],
      };

    default:
      return state;
  }
};
