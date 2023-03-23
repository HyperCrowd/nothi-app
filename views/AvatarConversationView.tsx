import * as React from 'react';
import type { IConversation } from '../types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

interface Props {
  conversation: IConversation;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AvatarConversationView({ conversation }: Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {conversation.messages.map((message, i) => (
          <Item key={`convo-${conversation.id}-${i}`}>{message.content}</Item>
        ))}
      </Stack>
    </Box>
  );
}
