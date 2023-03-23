import * as React from 'react';
import type { IConversation, IGuruAvatar } from '../types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GuruAvatar from '../components/GuruAvatar';

interface Props {
  avatar: IGuruAvatar;
  conversation: IConversation;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function getAvatar(from: string, avatar: IGuruAvatar) {
  return from === 'user' ? (
    <GuruAvatar
      text="User"
      width={64}
      height={64}
      canClick={false}
      showBadge={false}
    />
  ) : (
    <GuruAvatar
      avatar={avatar}
      width={64}
      height={64}
      canClick={false}
      showBadge={false}
    />
  );
}

export default function AvatarConversationView({
  conversation,
  avatar,
}: Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {conversation.messages.map((message, i) => {
          const fromAvatar = getAvatar(message.from, avatar);
          const toAvatar = getAvatar(message.from, avatar);

          const item =
            message.from === 'user' ? (
              <span>
                {fromAvatar}
                {message.content}
              </span>
            ) : (
              <span>
                {message.content}
                {toAvatar}
              </span>
            );

          return (
            <Item key={`convo-${conversation.id}-${i}`} className="message">
              {item}
            </Item>
          );
        })}
      </Stack>
    </Box>
  );
}
