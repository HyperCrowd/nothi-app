import React, { useLayoutEffect } from 'react';
import contextBus from './contexts';
import AvatarSelectionView from './views/gurus/AvatarSelection';
import AvatarConversationsView from './views/gurus/AvatarConversations';
import AvatarConversationView from './views/gurus/AvatarConversation';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import { navigateBack } from './actions/navigation';
import { avatars } from './state/gurus';
import { GurusProvider, useGuruContext } from './contexts/gurus';
import {
  NavigationProvider,
  useNavigationContext,
} from './contexts/navigation';

/**
 *
 */
export default function App() {
  // Process all actions after all renders are done
  const navigationContext = useNavigationContext();
  const guruContext = useGuruContext();
  const { state } = guruContext;

  useLayoutEffect(() => {
    contextBus.run();
  });

  if (contextBus.loaded == false) {
    // @TODO: Is there a smarter way to do this?
    contextBus.add('navigation', navigationContext);
    contextBus.add('gurus', guruContext);
    contextBus.loaded = true;
  }

  if (state === undefined) {
    return <></>;
  }

  const viewState =
    navigationContext.state.breadcrumb[
      navigationContext.state.breadcrumb.length - 1
    ];

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
      <NavigationProvider>
        <AppBar
          showBack={navigationContext.state.breadcrumb.length > 1}
          onBackClick={() => contextBus.schedule(navigateBack)}
        />
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>{currentView}</div>
        </Slide>
      </NavigationProvider>
    </div>
  );
}
