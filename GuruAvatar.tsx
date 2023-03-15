import * as React from 'react';
import { Paper, Button, Avatar } from '@mui/material';

export interface IGuruAvatar {
  name: string;
  image: string;
  description: string;
}

interface Props {
  item: IGuruAvatar;
}

export default function GuruAvatar({ item }: Props) {
  return (
    <Paper className=" guruAvatar main-bkg">
      <Avatar
        alt={item.name + ' - ' + item.description}
        src={item.image}
        sx={{ width: 256, height: 256 }}
        variant="square"
      />
    </Paper>
  );
}
