import React, { useState, useRef, useEffect } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import AvatarConversationsView from './views/AvatarConversationsView';
import { Slide } from '@mui/material';
import { State } from './state/App';

export default function App() {
  const [state, setState] = useState(State);

  const viewState = state.breadcrumb[state.breadcrumb.length - 1];
  let currentView: JSX.Element;

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <AvatarSelectionView
          setAvatarIndex={(index: number) => {
            state.avatarIndex = index;
            setState(state);
          }}
          setAvatarSelected={(index: number) => {
            state.breadcrumb.push('avatarConversationsView');
            state.avatarSelected = index;
            setState(state);
          }}
          avatarIndex={state.avatarIndex}
        />
      );
      break;
    case 'avatarConversationsView':
      currentView = <AvatarConversationsView />;
      break;
  }

  return (
    <div>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div>{currentView}</div>
      </Slide>
    </div>
  );
}
