import React, { useState, useContext } from 'react';
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
/**
 *
 */
export default function App() {
  const [state, setState] = useState(State);
  const context = useContext(Context);
  const { guruCarousel } = state;

  const viewState = guruCarousel.breadcrumb[guruCarousel.breadcrumb.length - 1];

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
          avatarIndex={guruCarousel.avatarIndex}
        />
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <AvatarConversationsView
          avatarIndex={guruCarousel.avatarIndex}
          avatar={avatars[guruCarousel.avatarIndex]}
          onConversationClick={(index: number) =>
            selectConversation(state, setState, index)
          }
        />
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <AvatarConversationView
          avatar={avatars[guruCarousel.avatarIndex]}
          conversation={
            avatars[guruCarousel.avatarIndex].conversations[
              guruCarousel.conversationIndex
            ]
          }
        />
      );
      break;
  }

  return (
    <div>
      <AppBar
        showBack={guruCarousel.breadcrumb.length > 1}
        onBackClick={() => navigateBack(state, setState)}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
