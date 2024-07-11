// use this file to configure the theme

import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { teal, orange, deepOrange, brown } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px', 
    boardBarHeight: '60px'
  }, 
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
        }
      },
      
    dark: {
      palette: {
        primary: brown,
        secondary: orange
      }
    }
  }, 
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#877b81'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          fontWeight: 'bold'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          // Some CSS
          color: theme.palette.primary.main, 
          fontSize: '0.875rem'
        })
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({        
          // Some CSS
          color: theme.palette.primary.main,
          fontSize: '0.875rem', 
          '.MuiOutlinedInput-notchedOutline': {        // border line of search box
            borderColor: theme.palette.primary.light 
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {        // border line of search box
            borderColor: theme.palette.primary.main
            }
          }, 
          // '& fieldset': {
          //   borderWidth: '2px' !important
          // }
        })
      }
    } 
  }
  // ...other properties
});

export default theme;