import type { NavigationContext } from '../contexts/navigation';

export const NavigationActions: { [key: string]: string } = {
  NAVIGATE_BACK: 'NAVIGATE_BACK',
};

/**
 *
 */
export const navigateBack = (context: NavigationContext) => {
  context.dispatch({
    type: NavigationActions.NAVIGATE_BACK,
  });
};
