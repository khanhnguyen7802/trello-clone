import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import karina1 from '~/assets/karina1.jpg'
import winter1 from '~/assets/winter1.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/utils/formatters';

const MENU_STYLE = {
    color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B'), 
    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#F1D3B2' : '#FDD7E4'), // 
    border: 'none', 
    paddingX: '5px', 
    '& .MuiSvgIcon-root': {
      color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B')
    }, 
    '&:hover': {
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#c9b1a9' : 'white')
    }
}


function BoardBar({ board }) { 
  return (
    <Box px={2} sx={{
      // backgroundColor: 'white',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight, 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      gap: 2,
      overflowX: 'auto',
      borderBottom: '1px solid #00bfa5',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#89ABE3'), 
      '&::-webkit-scrollbar-track': { m :2 }
    }}>
      Board bar

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <Chip sx={MENU_STYLE}
        icon={<DashboardIcon />} 
        label={board?.title} 
        onClick={() => {}}/>

        <Chip sx={MENU_STYLE}
        icon={<VpnLockIcon />} 
        label={capitalizeFirstLetter(board?.type)} 
        onClick={() => {}}/>
        
        
        <Chip sx={MENU_STYLE}
        icon={<AddToDriveIcon/>} 
        label="Add to Drive" 
        onClick={() => {}}/>


        <Chip sx={MENU_STYLE}
        icon={<BoltIcon/>} 
        label="Automation" 
        onClick={() => {}}/>
        
        
        <Chip sx={MENU_STYLE}
        icon={<FilterListIcon/>} 
        label="Filter" 
        onClick={() => {}}/>
        
 
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <Button 
          variant="outlined" 
          startIcon={<PersonAddIcon />}
          sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? '#c9b1a9' : '#00008B'),
            borderColor: (theme) => (theme.palette.mode === 'dark' ? '#9e7567' : '#00008B'),
            '&:hover': {
              borderColor: (theme) => (theme.palette.mode === 'dark' ? '#9e7567' : '#00008B'), 
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#826c67' : '#9cbef7'), 
            }
          }}>Invite</Button>

        <AvatarGroup 
        max={3}
        sx={{                       // set properties for all avatars
          '& .MuiAvatar-root': {
            width: 34, 
            height: 34,
            fontSize: '16px',
            cursor: 'pointer'
          }
        }}
        >
          <Tooltip title='Yu Jimin'>
            <Avatar 
              alt="yujimin" 
              src={karina1} />
          </Tooltip>

          <Tooltip title='Yu Kim Minjeong'>
            <Avatar 
              alt="kimminjeong" 
              src={winter1} />
          </Tooltip>
          
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        
      </Box>
  
    </Box>
  )
}

export default BoardBar