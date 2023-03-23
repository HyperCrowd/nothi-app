import React, { useState, useRef, useEffect } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import AppBar from './components/AppBar';
import { Slide } from '@mui/material';
import { State, avatars } from './state/App';

export default function App() {
  const [state, setState] = useState(State);

  const viewState = state.breadcrumb[state.breadcrumb.length - 1];
  console.log(state);
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
          });
        }}
      />
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
