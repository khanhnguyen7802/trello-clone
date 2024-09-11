// use this file to configure the theme

import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT, 
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT, 
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  }, 
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //     }
    //   },
      
    // dark: {
    //   palette: {
    //     primary: brown,
    //     secondary: orange
    //   }
    // }
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
        root: ({theme}) => ({
          // Some CSS
          color: (theme.palette.mode === 'dark' ? '#73605B' : '#00008B'),
          textTransform: 'none',
          fontWeight: 'bold',
          borderWidth: '0.5px',
          '&:hover': {
            borderWidth: '1.5px'
          } 
        })
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

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: () => ({
          '&.MuiTypograph-body1': { fontSize: '0.875rem' }
        })
      }
    },

    MuiSvgIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B')
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({        
          // Some CSS
          color: theme.palette.primary.main,
          fontSize: '0.875rem', 
          // '.MuiOutlinedInput-notchedOutline': {        // border line of search box
          //   borderColor: theme.palette.primary.light 
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {        // border line of search box
          //   borderColor: '#9e7567'
          //   }
          // }, 
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