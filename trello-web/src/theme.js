// use this file to configure the theme

import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { teal, brown } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px', 
    boardBarHeight: '58px'
  }, 
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        }
      },
      
    dark: {
      palette: {
        primary: brown,
      }
    }
  }
  // ...other properties
});

export default theme;