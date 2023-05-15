import type { StateType, SetState } from './state/App';
import React, { useState, useContext } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import AvatarConversationView from './views/AvatarConversationView';
import { Context } from './state/App';
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
  const context = useContext(Context);

  const viewState =
    state.guruCarousel.breadcrumb[state.guruCarousel.breadcrumb.length - 1];

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
          avatarIndex={state.guruCarousel.avatarIndex}
        />
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <AvatarConversationsView
          avatarIndex={state.guruCarousel.avatarIndex}
          avatar={avatars[state.guruCarousel.avatarIndex]}
          onConversationClick={(index: number) =>
            selectConversation(state, setState, index)
          }
        />
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <AvatarConversationView
          avatar={avatars[state.guruCarousel.avatarIndex]}
          conversation={
            avatars[state.guruCarousel.avatarIndex].conversations[
              state.guruCarousel.conversationIndex
            ]
          }
        />
      );
      break;
  }

  return (
    <div>
      <AppBar
        showBack={state.guruCarousel.breadcrumb.length > 1}
        onBackClick={() => navigateBack(state, setState)}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
