import React from 'react';
import AvatarSelectionView from './views/gurus/AvatarSelection';
import AvatarConversationsView from './views/gurus/AvatarConversations';
import AvatarConversationView from './views/gurus/AvatarConversation';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import { navigateBack } from './actions/gurus';
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
          <AvatarSelectionView avatarIndex={state.avatarIndex} />
        </GurusProvider>
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <GurusProvider>
          <AvatarConversationsView
            avatarIndex={state.avatarIndex}
            avatar={avatars[state.avatarIndex]}
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
        onBackClick={() => navigateBack()}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
