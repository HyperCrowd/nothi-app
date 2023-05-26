import React, { Dispatch } from 'react';
import type { IGuruAvatar } from '../../types';
import type { IGuruCarousel } from '../../state/gurus';
import type { Action } from '../../contexts';
import { setAvatarIndex, setAvatarSelected } from '../../actions/gurus';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GuruAvatar from '../../components/GuruAvatar';

interface Props {
  avatarIndex: number;
  avatar: IGuruAvatar;
  onConversationClick: (index: number) => void;
}

/**
 *
 */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

/**
 *
 */
function AvatarConversations({
  avatarIndex,
  avatar,
  onConversationClick,
}: Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <GuruAvatar avatar={avatar} canClick={false} showBadge={false} />
      <Stack spacing={2}>
        {avatar.conversations.map((conversation, i) => (
          <Item
            key={`convo-${conversation.id}`}
            onClick={() => onConversationClick(i)}
          >
            {conversation.title}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export const AvatarConversationView = (
  state: IGuruCarousel,
  dispatch: Dispatch<Action & IGuruCarousel>
) => {
  return (
    <AvatarConversations
      setAvatarIndex={setAvatarIndex}
      setAvatarSelected={setAvatarSelected}
      avatarIndex={state.avatarIndex}
    />
  );
};
