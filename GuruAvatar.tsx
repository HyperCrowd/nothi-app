import * as React from 'react';
import { Paper } from '@mui/material';

export interface IGuruAvatar {
  name: string;
  image: string;
  description: string;
}

interface Props {
  item: IGuruAvatar;
}

export default function GuruAvatar({ item }: Props) {
  const style = {
    backgroundImage: `url(${item.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Paper className="guruAvatar main-bkg">
      <div className="guruAvatarImage" style={style} />
    </Paper>
  );
}
