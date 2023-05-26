import React, { useContext } from 'react';
import type { IConversation, IGuruAvatar } from '../../types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GuruAvatar from '../../components/GuruAvatar';
import { GuruContext } from '../../contexts/gurus';
import { avatars } from '../../state/gurus';

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

export default function AvatarConversationView() {
  const { state, dispatch } = useContext(GuruContext);
  const { avatarIndex, conversationIndex } = state;
  const avatar = avatars[avatarIndex];
  const conversation = avatars[avatarIndex].conversations[conversationIndex];

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {conversation.messages.map((message, i) => {
          const fromAvatar = getAvatar(message.from, avatar);

          const item =
            message.from === 'user' ? (
              <span
                className="message"
                style={{
                  float: 'right',
                }}
              >
                {message.content}
              </span>
            ) : (
              <div>
                <span
                  style={{
                    float: 'left',
                  }}
                >
                  {fromAvatar}
                </span>
                <span
                  className="message"
                  style={{
                    float: 'left',
                  }}
                >
                  {message.content}
                </span>
              </div>
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
