// use this file to configure the theme

import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: blue.A400, 
    }
  },
});

export default theme;