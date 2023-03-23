import * as React from 'react';
import type { IGuruAvatar } from '../types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

interface Props {
  avatarIndex: number;
  avatar: IGuruAvatar;
  onConversationClick: (index: number) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AvatarConversationsView({
  avatarIndex,
  avatar,
  onConversationClick,
}: Props) {
  return (
    <Box sx={{ width: '100%' }}>
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
