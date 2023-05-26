import React, { useContext, useLayoutEffect } from 'react';
import contextBus from './contexts';
import AvatarSelectionView from './views/gurus/AvatarSelection';
import AvatarConversationsView from './views/gurus/AvatarConversations';
import AvatarConversationView from './views/gurus/AvatarConversation';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import { navigateBack } from './actions/navigation';

import { GurusProvider, GuruContext } from './contexts/gurus';
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
  const guruContext = useContext(GuruContext);

  useLayoutEffect(() => {
    contextBus.run();
  });

  const { breadcrumb } = navigationContext.state;

  const viewState = breadcrumb[breadcrumb.length - 1];

  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <GurusProvider>
          <AvatarSelectionView />
        </GurusProvider>
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <GurusProvider>
          <AvatarConversationsView />
        </GurusProvider>
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <GurusProvider>
          <AvatarConversationView />
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
