import * as React from 'react';
import { Paper, Button } from '@mui/material';

export interface IGuruAvatar {
  name: strong;
  description: string;
}

export default function GuruAvatar({ item }: { item: IGuruAvatar }) {
  return (
    <Paper className="main-bkg">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
