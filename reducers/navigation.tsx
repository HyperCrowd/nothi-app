import type { INavigation } from '../state/navigation';
import { NavigationActions } from '../actions/navigation';

/**
 * Reducer
 */
export const reducer = (
  state: INavigation,
  action: { type: string } & INavigation
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

    default:
      return state;
  }
};
