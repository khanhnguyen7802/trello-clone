import { useState } from 'react'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
      // backgroundColor: 'white',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight, 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      gap: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2A3132' : '#A1D6E2'),
      '&::-webkit-scrollbar-track': { m :2 }
  }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <AppsIcon sx={{ 
          color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
        }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
          <SvgIcon 
            component={TrelloIcon} 
            fontSize='small' 
            inheritViewBox 
            sx={{ 
              color: (theme) => (theme.palette.mode === 'dark' ? "#A1D6E2"  : '#4d4848') 
            }}/>
          <Typography 
            variant='span' 
            sx={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
            }}>Trello</Typography>
        </Box>
      
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}></Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        

        <Button 
          sx={{ 
            color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848'), 
            border: 'none' 
          }} 
          variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <TextField 
          id="outlined-search" 
          label="Search..." 
          type="text" // add icon x at the end
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon 
                  sx={{ 
                    color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') 
                  }}></SearchIcon>
              </InputAdornment>
            ), 
            endAdornment: (
              <CloseIcon 
                sx={{
                  fontSize: 'small', 
                  color:  (theme) => (theme.palette.mode === 'dark') ? // if it is dark theme  
                    searchValue ? '#A1D6E2' // if there is search value then x icon appears 
                    : 'transparent' // else transparent 

                  : searchValue ? '#4d4848'    // else if it is light theme and there is search value, then that color
                    : 'transparent',        // otherwise transparent
                      
                  cursor: 'pointer'}} 
                onClick={() => setSearchValue('')}/>
            )
          }} 
          sx={{ 
            minWidth: '100px', 
            maxWidth: '180px', 
            '& label': { color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') },
            '& label.Mui-focused': { color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') },
            '& input': { color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') },
            '& .MuiOutlinedInput-root': { 
              '& fieldset': {borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')},
              '&:hover fieldset': {borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')},
              '&.Mui-focused fieldset': {borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') },
              
            } 
            
          }}/>

        <ModeSelect /> 

        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon 
            sx={{ 
              cursor: 'pointer', 
              color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848') 
            }}/>
        </Tooltip>
      
        <Profiles /> 

      </Box>
      

    </Box>

  )
}

export default AppBar 