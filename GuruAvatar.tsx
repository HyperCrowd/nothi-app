import * as React from 'react';
import { Paper, Button } from '@mui/material';

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
    <Paper className="main-bkg">
      <h2>{item.name}</h2>
      <img src={item.image} />
      <p>{item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
