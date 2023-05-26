import React from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import AvatarConversationView from './views/AvatarConversationView';
import { Context } from './state/App';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import {
  State,
  setAvatarIndex,
  setAvatarSelected,
  selectConversation,
  navigateBack,
} from './state/App';
import { avatars } from './state/gurus';
import { GurusProvider, useGuruContext } from './contexts/gurus';
/**
 *
 */
export default function App() {
  const { state, dispatch } = useGuruContext() || {};

  if (state === undefined) {
    return <></>;
  }

  const viewState = state.breadcrumb[state.breadcrumb.length - 1];

  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <GurusProvider>
          <AvatarSelectionView
            setAvatarIndex={(index: number) =>
              setAvatarIndex(state, dispatch, index)
            }
            setAvatarSelected={(index: number) =>
              setAvatarSelected(state, dispatch, index)
            }
            avatarIndex={state.avatarIndex}
          />
        </GurusProvider>
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <GurusProvider>
          <AvatarConversationsView
            avatarIndex={state.avatarIndex}
            avatar={avatars[state.avatarIndex]}
            onConversationClick={(index: number) =>
              selectConversation(state, dispatch, index)
            }
          />
        </GurusProvider>
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <GurusProvider>
          <AvatarConversationView
            avatar={avatars[state.avatarIndex]}
            conversation={
              avatars[state.avatarIndex].conversations[state.conversationIndex]
            }
          />
        </GurusProvider>
      );
      break;
  }

  return (
    <div>
      <AppBar
        showBack={state.breadcrumb.length > 1}
        onBackClick={() => navigateBack(state, dispatch)}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
