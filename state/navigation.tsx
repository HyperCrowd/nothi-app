export interface INavigation {
  avatarIndex?: number;
  avatarSelected?: number;
  breadcrumb?: string[];
  conversationIndex?: number;
  isRecording?: boolean;
}

/**
 * State
 */
export const state: INavigation = {
  breadcrumb: ['avatarSelectionView'],
};
