export const NavigationActions: { [key: string]: string } = {
  NAVIGATE_TO: 'NAVIGATE_TO',
  NAVIGATE_BACK: 'NAVIGATE_BACK',
};

const context = 'navigation';

/**
 *
 */
export const navigateBack = () => {
  return {
    type: NavigationActions.NAVIGATE_BACK,
    context,
  };
};

/**
 *
 */
export const navigateTo = (view: string) => {
  return {
    type: NavigationActions.NAVIGATE_TO,
    context,
    view,
  };
};

/**
 *
 */
export const refresh = () => {
  return {
    type: NavigationActions.REFFESH,
    context,
  };
};
