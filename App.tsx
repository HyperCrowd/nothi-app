import React, { useState, useRef } from 'react';
import AvatarSelectionView from './views/AvatarSelectionView';
import { Slide } from '@mui/material';

const appPositionStack: string[] = ['avatarSelectionView'];

export default function App() {
  const [avatarIndex, setAvatarIndex] = useState<number>(0);
  const [avatarSelected, setAvatarSelected] = useState<number>(null);
  const appRef = useRef(null);

  const viewState = appPositionStack[appPositionStack.length - 1];
  let currentView: JSX.Element;

  if (appRef === undefined) {
    return <div></div>;
  }

  switch (viewState) {
    case 'avatarSelectionView':
      currentView = (
        <Slide direction="up" in={true} container={appRef.current}>
          <AvatarSelectionView
            setAvatarIndex={setAvatarIndex}
            setAvatarSelected={(index: number) => {
              appPositionStack.push('avatarConversationsView');
              setAvatarSelected(index);
            }}
            avatarIndex={avatarIndex}
          />
        </Slide>
      );
      break;
    case 'avatarConversationsView':
      currentView = (
        <Slide direction="up" in={false} container={appRef.current}>
          <></>
        </Slide>
      );
      break;
  }

  console.log(appRef);
  const app = <div ref={appRef}>{currentView}</div>;

  return app;
}
