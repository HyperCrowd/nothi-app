import React, { useContext } from 'react';
import type { IGuruAvatar } from '../../types';
import { selectConversation } from '../../actions/gurus';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GuruAvatar from '../../components/GuruAvatar';
import { GuruContext } from '../../contexts/gurus';
import { avatars } from '../../state/gurus';
import contextBus from '../../contexts';

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

export default function AvatarConversationsView() {
  const { state, dispatch } = useContext(GuruContext);
  const { avatarIndex } = state;
  const avatar = avatars[avatarIndex];

  return (
    <Box sx={{ width: '100%' }}>
      <GuruAvatar avatar={avatar} canClick={false} showBadge={false} />
      <Stack spacing={2}>
        {avatar.conversations.map((conversation, i) => (
          <Item
            key={`convo-${conversation.id}`}
            onClick={(i: number) => {
              contextBus(dispatch, selectConversation, i);
            }}
          >
            {conversation.title}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
