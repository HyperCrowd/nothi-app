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
    case NavigationActions.BACK:
      const breadcrumb = [...state.breadcrumb];
      breadcrumb.pop();

      return {
        ...state,
        breadcrumb,
      };

    /**
     *
     */
    case NavigationActions.TO:
      return {
        breadcrumb: [...state.breadcrumb, action.view],
      };

    /**
     *
     */
    case NavigationActions.REFRESH:
      return {
        refresh: !state.refresh,
      };

    default:
      return state;
  }
};
