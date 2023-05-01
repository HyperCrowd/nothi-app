import type { StateType, SetState } from './state/App';
import React, { useState } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import AvatarConversationView from './views/AvatarConversationView';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import {
  State,
  avatars,
  setAvatarIndex,
  setAvatarSelected,
  selectConversation,
  navigateBack,
} from './state/App';

/**
 *
 */
export default function App() {
  const [state, setState] = useState(State);

  const viewState = state.breadcrumb[state.breadcrumb.length - 1];

  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <AvatarSelectionView
          setAvatarIndex={(index: number) =>
            setAvatarIndex(state, setState, index)
          }
          setAvatarSelected={(index: number) =>
            setAvatarSelected(state, setState, index)
          }
          avatarIndex={state.avatarIndex}
        />
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <AvatarConversationsView
          avatarIndex={state.avatarIndex}
          avatar={avatars[state.avatarIndex]}
          onConversationClick={(index: number) =>
            selectConversation(state, setState, index)
          }
        />
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <AvatarConversationView
          avatar={avatars[state.avatarIndex]}
          conversation={
            avatars[state.avatarIndex].conversations[state.conversationIndex]
          }
        />
      );
      break;
  }

  return (
    <div>
      <AppBar
        showBack={state.breadcrumb.length > 1}
        onBackClick={() => navigateBack(state, setState)}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
