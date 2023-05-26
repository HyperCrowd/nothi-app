export interface INavigation extends Record<string, unknown> {
  view?: string;
  breadcrumb?: string[];
}

const startingView = 'avatarSelectionView';

/**
 * State
 */
export const state: INavigation = {
  view: startingView,
  breadcrumb: [startingView],
};
