const actions = {
  SET_AVATAR_INDEX: 'SET_AVATAR_INDEX',
  SET_AVATAR_SELECTED: 'SET_AVATAR_SELECTED',
  SELECT_CONVERSATION: 'SELECT_CONVERSATION',
  NAVIGATE_BACK: 'NAVIGATE_BACK',
};

export default function reducer(state, action) {
  switch (action.type) {
    /**
     *
     */
    case actions.SET_AVATAR_INDEX:
      return { avatarIndex: state.avatarIndex };

    /**
     *
     */
    case actions.SET_AVATAR_SELECTED:
      return {
        breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
        avatarSelected: state.avatarSelected,
      };

    /**
     *
     */
    case actions.SELECT_CONVERSATION:
      return {
        breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
        conversationIndex: state.conversationIndex,
      };

    /**
     *
     */
    case actions.NAVIGATE_BACK:
      const breadcrumb = [...state.breadcrumb].pop();
      return {
        breadcrumb,
      };

    default:
      throw new Error();
  }
}

/*
 export function setAvatarIndex(
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    avatarIndex: index,
  });
}

export function setAvatarSelected(
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
    avatarSelected: index,
  });
}

export function selectConversation(
  state: StateType,
  setState: SetState,
  index: number
) {
  setState({
    ...state,
    breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
    conversationIndex: index,
  });
}

export function navigateBack(state: StateType, setState: SetState) {
  state.breadcrumb.pop();
  setState({
    ...state,
  });
}
*/
