export const NavigationActions: { [key: string]: string } = {
  TO: 'NAVIGATE_TO',
  BACK: 'NAVIGATE_BACK',
  REFRESH: 'NAVIGATEREFRESH',
};

/**
 *
 */
export const navigateBack = () => {
  return {
    type: NavigationActions.BACK,
  };
};

/**
 *
 */
export const navigateTo = (view: string) => {
  return {
    type: NavigationActions.TO,
    view,
  };
};

/**
 *
 */
export const refresh = () => {
  return {
    type: NavigationActions.REFFESH,
  };
};
