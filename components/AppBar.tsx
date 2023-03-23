import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/ArrowBack';

interface Props {
  showBack: boolean;
  onBackClick: () => void;
}

export default function MainAppBar({ showBack, onBackClick }: Props) {
  const backIcon =
    showBack === true ? (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={onBackClick}
      >
        <MenuIcon />
      </IconButton>
    ) : (
      <></>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{backIcon}</Toolbar>
      </AppBar>
    </Box>
  );
}
