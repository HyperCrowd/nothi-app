import React, { useState } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import AvatarConversationView from './views/AvatarConversationView';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import { State, avatars } from './state/App';

export default function App() {
  const [state, setState] = useState(State);

  const viewState = state.breadcrumb[state.breadcrumb.length - 1];

  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <AvatarSelectionView
          setAvatarIndex={(index: number) => {
            setState({
              ...state,
              avatarIndex: index,
            });
          }}
          setAvatarSelected={(index: number) => {
            setState({
              ...state,
              breadcrumb: [...state.breadcrumb, 'avatarConversationsView'],
              avatarSelected: index,
            });
          }}
          avatarIndex={state.avatarIndex}
        />
      );
      break;

    case 'avatarConversationsView':
      currentView = (
        <AvatarConversationsView
          avatarIndex={state.avatarIndex}
          avatar={avatars[state.avatarIndex]}
          onConversationClick={(conversationIndex) => {
            setState({
              ...state,
              breadcrumb: [...state.breadcrumb, 'avatarConversationView'],
              conversationIndex: conversationIndex,
            });
          }}
        />
      );
      break;

    case 'avatarConversationView':
      currentView = (
        <AvatarConversationView
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
        onBackClick={() => {
          state.breadcrumb.pop();
          console.log(state.breadcrumb);
          setState({
            ...state,
            conversationIndex: -1,
            avatarSelected: -1,
          });
        }}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
