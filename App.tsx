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
  const { avatarIndex, conversationIndex } = guruContext.state;
  const { breadcrumb } = navigationContext.state;

  useLayoutEffect(() => {
    console.log('render complete');
    contextBus.run();
  });

  contextBus.refresh('navigation', navigationContext);
  contextBus.refresh('gurus', guruContext);

  const viewState = breadcrumb[breadcrumb.length - 1];

  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <GurusProvider>
          <AvatarSelectionView avatarIndex={avatarIndex} />
        </GurusProvider>
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <GurusProvider>
          <AvatarConversationsView
            avatarIndex={avatarIndex}
            avatar={avatars[avatarIndex]}
          />
        </GurusProvider>
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <GurusProvider>
          <AvatarConversationView
            avatar={avatars[avatarIndex]}
            conversation={avatars[avatarIndex].conversations[conversationIndex]}
          />
        </GurusProvider>
      );
      break;
  }

  return (
    <div>
      <NavigationProvider>
        <AppBar
          showBack={breadcrumb.length > 1}
          onBackClick={() => contextBus.schedule(navigateBack)}
        />
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>{currentView}</div>
        </Slide>
      </NavigationProvider>
    </div>
  );
}
